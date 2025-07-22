import { create } from 'zustand';
import { investigationService } from '@/lib/api/services';
import { Investigation, InvestigationRequest } from '@/types/api';

interface InvestigationState {
  investigations: Investigation[];
  currentInvestigation: Investigation | null;
  isLoading: boolean;
  error: string | null;
  isStreaming: boolean;
}

interface InvestigationActions {
  startInvestigation: (request: InvestigationRequest) => Promise<Investigation>;
  getInvestigationStatus: (id: string) => Promise<void>;
  getInvestigationResults: (id: string) => Promise<void>;
  loadInvestigations: () => Promise<void>;
  cancelInvestigation: (id: string) => Promise<void>;
  setCurrentInvestigation: (investigation: Investigation | null) => void;
  startStreaming: (id: string) => void;
  stopStreaming: () => void;
  clearError: () => void;
  updateInvestigation: (investigation: Investigation) => void;
}

type InvestigationStore = InvestigationState & InvestigationActions;

export const useInvestigationStore = create<InvestigationStore>()((set, get) => ({
  // Initial state
  investigations: [],
  currentInvestigation: null,
  isLoading: false,
  error: null,
  isStreaming: false,

  // Actions
  startInvestigation: async (request: InvestigationRequest) => {
    set({ isLoading: true, error: null });
    
    try {
      const investigation = await investigationService.startInvestigation(request);
      
      set((state) => ({
        investigations: [investigation, ...state.investigations],
        currentInvestigation: investigation,
        isLoading: false,
      }));

      return investigation;
    } catch (error: unknown) {
      set({
        isLoading: false,
        error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Failed to start investigation',
      });
      throw error;
    }
  },

  getInvestigationStatus: async (id: string) => {
    try {
      const investigation = await investigationService.getInvestigationStatus(id);
      
      set((state) => ({
        investigations: state.investigations.map((inv) =>
          inv.id === id ? investigation : inv
        ),
        currentInvestigation: state.currentInvestigation?.id === id ? investigation : state.currentInvestigation,
      }));
    } catch (error: unknown) {
      set({
        error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Failed to get investigation status',
      });
    }
  },

  getInvestigationResults: async (id: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const investigation = await investigationService.getInvestigationResults(id);
      
      set((state) => ({
        investigations: state.investigations.map((inv) =>
          inv.id === id ? investigation : inv
        ),
        currentInvestigation: state.currentInvestigation?.id === id ? investigation : state.currentInvestigation,
        isLoading: false,
      }));
    } catch (error: unknown) {
      set({
        isLoading: false,
        error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Failed to get investigation results',
      });
    }
  },

  loadInvestigations: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const investigations = await investigationService.getInvestigations();
      
      set({
        investigations,
        isLoading: false,
      });
    } catch (error: unknown) {
      set({
        isLoading: false,
        error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Failed to load investigations',
      });
    }
  },

  cancelInvestigation: async (id: string) => {
    try {
      await investigationService.cancelInvestigation(id);
      
      set((state) => ({
        investigations: state.investigations.map((inv) =>
          inv.id === id ? { ...inv, status: 'cancelled' as const } : inv
        ),
        currentInvestigation: state.currentInvestigation?.id === id 
          ? { ...state.currentInvestigation, status: 'cancelled' as const }
          : state.currentInvestigation,
      }));
    } catch (error: unknown) {
      set({
        error: (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || 'Failed to cancel investigation',
      });
    }
  },

  setCurrentInvestigation: (investigation: Investigation | null) => {
    set({ currentInvestigation: investigation });
  },

  startStreaming: (id: string) => {
    const eventSource = investigationService.createInvestigationStream(id);
    
    eventSource.onmessage = (event) => {
      try {
        const investigation: Investigation = JSON.parse(event.data);
        get().updateInvestigation(investigation);
      } catch (error) {
        console.error('Error parsing SSE data:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
      set({ isStreaming: false });
      eventSource.close();
    };

    set({ isStreaming: true });

    // Store event source for cleanup
    (window as unknown as { __investigationEventSource?: EventSource }).__investigationEventSource = eventSource;
  },

  stopStreaming: () => {
    const windowWithEventSource = window as unknown as { __investigationEventSource?: EventSource };
    const eventSource = windowWithEventSource.__investigationEventSource;
    if (eventSource) {
      eventSource.close();
      delete windowWithEventSource.__investigationEventSource;
    }
    set({ isStreaming: false });
  },

  updateInvestigation: (investigation: Investigation) => {
    set((state) => ({
      investigations: state.investigations.map((inv) =>
        inv.id === investigation.id ? investigation : inv
      ),
      currentInvestigation: state.currentInvestigation?.id === investigation.id 
        ? investigation 
        : state.currentInvestigation,
    }));
  },

  clearError: () => set({ error: null }),
}));