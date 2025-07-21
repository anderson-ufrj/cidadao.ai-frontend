import { create } from 'zustand';

interface UIState {
  // Loading states
  isGlobalLoading: boolean;
  
  // Modals
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  
  // Sidebar
  isSidebarOpen: boolean;
  
  // Theme
  theme: 'light' | 'dark' | 'system';
  
  // Language
  language: 'pt-BR' | 'en-US';
  
  // Notifications
  notifications: Notification[];
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  timestamp: Date;
  duration?: number;
  actions?: NotificationAction[];
}

interface NotificationAction {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary';
}

interface UIActions {
  // Loading
  setGlobalLoading: (loading: boolean) => void;
  
  // Modals
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  
  // Sidebar
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  
  // Theme
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // Language
  setLanguage: (language: 'pt-BR' | 'en-US') => void;
  
  // Notifications
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

type UIStore = UIState & UIActions;

export const useUIStore = create<UIStore>()((set, get) => ({
  // Initial state
  isGlobalLoading: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isSidebarOpen: false,
  theme: 'system',
  language: 'pt-BR',
  notifications: [],

  // Actions
  setGlobalLoading: (loading: boolean) => {
    set({ isGlobalLoading: loading });
  },

  openLoginModal: () => {
    set({ isLoginModalOpen: true, isRegisterModalOpen: false });
  },

  closeLoginModal: () => {
    set({ isLoginModalOpen: false });
  },

  openRegisterModal: () => {
    set({ isRegisterModalOpen: true, isLoginModalOpen: false });
  },

  closeRegisterModal: () => {
    set({ isRegisterModalOpen: false });
  },

  toggleSidebar: () => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
  },

  setSidebarOpen: (open: boolean) => {
    set({ isSidebarOpen: open });
  },

  setTheme: (theme: 'light' | 'dark' | 'system') => {
    set({ theme });
    
    // Apply theme to document
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.toggle('dark', systemTheme === 'dark');
      } else {
        root.classList.toggle('dark', theme === 'dark');
      }
      
      localStorage.setItem('theme', theme);
    }
  },

  setLanguage: (language: 'pt-BR' | 'en-US') => {
    set({ language });
    
    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  },

  addNotification: (notificationData) => {
    const notification: Notification = {
      ...notificationData,
      id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    };

    set((state) => ({
      notifications: [...state.notifications, notification],
    }));

    // Auto-remove notification after duration
    const duration = notification.duration || 5000;
    if (duration > 0) {
      setTimeout(() => {
        get().removeNotification(notification.id);
      }, duration);
    }
  },

  removeNotification: (id: string) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },
}));