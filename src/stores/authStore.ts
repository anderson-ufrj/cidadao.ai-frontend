import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { authService } from '@/lib/api/services';
import { User, LoginCredentials, RegisterData } from '@/types/api';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  clearError: () => void;
  setToken: (token: string) => void;
  refreshToken: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await authService.login(credentials);
          
          const { access_token, refresh_token, user } = response;
          
          // Set token in API client
          const { apiClient } = await import('@/lib/api/client');
          apiClient.setAuthToken(access_token);
          
          // Store refresh token
          if (typeof window !== 'undefined') {
            localStorage.setItem('refresh_token', refresh_token);
          }
          
          set({ 
            user, 
            token: access_token,
            isAuthenticated: true, 
            isLoading: false, 
            error: null 
          });
        } catch (error: unknown) {
          set({ 
            isLoading: false, 
            error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Login failed' 
          });
          throw error;
        }
      },

      register: async (data: RegisterData) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await authService.register(data);
          
          const { access_token, refresh_token, user } = response;
          
          // Set token in API client
          const { apiClient } = await import('@/lib/api/client');
          apiClient.setAuthToken(access_token);
          
          // Store refresh token
          if (typeof window !== 'undefined') {
            localStorage.setItem('refresh_token', refresh_token);
          }
          
          set({ 
            user, 
            token: access_token,
            isAuthenticated: true, 
            isLoading: false, 
            error: null 
          });
        } catch (error: unknown) {
          set({ 
            isLoading: false, 
            error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Registration failed' 
          });
          throw error;
        }
      },

      logout: () => {
        // Clear API client token
        import('@/lib/api/client').then(({ apiClient }) => {
          apiClient.clearAuthToken();
        });
        
        // Clear local storage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('refresh_token');
        }
        
        set({ 
          user: null, 
          token: null,
          isAuthenticated: false, 
          error: null 
        });

        // Call logout endpoint (fire and forget)
        authService.logout().catch(() => {
          // Ignore logout endpoint errors
        });
      },

      checkAuth: async () => {
        const { token } = get();
        
        if (!token) {
          // Try to load from localStorage (handled by API client)
          const { apiClient } = await import('@/lib/api/client');
          apiClient.loadTokenFromStorage();
          
          if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('auth_token');
            if (!storedToken) {
              return;
            }
            set({ token: storedToken });
          }
        }

        try {
          set({ isLoading: true });
          
          const user = await authService.getCurrentUser();
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null 
          });
        } catch {
          // Token invalid, clear state
          get().logout();
          set({ isLoading: false });
        }
      },

      setToken: (token: string) => {
        import('@/lib/api/client').then(({ apiClient }) => {
          apiClient.setAuthToken(token);
        });
        set({ token });
      },

      refreshToken: async () => {
        try {
          if (typeof window === 'undefined') {
            throw new Error('Cannot refresh token on server side');
          }

          const refreshToken = localStorage.getItem('refresh_token');
          if (!refreshToken) throw new Error('No refresh token');

          const response = await authService.refreshToken(refreshToken);

          const { access_token, refresh_token: newRefreshToken } = response;
          
          // Update API client token
          const { apiClient } = await import('@/lib/api/client');
          apiClient.setAuthToken(access_token);
          
          // Store new refresh token
          localStorage.setItem('refresh_token', newRefreshToken);
          
          set({ token: access_token });
        } catch (error) {
          get().logout();
          throw error;
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        user: state.user, 
        token: state.token,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);