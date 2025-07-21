import { apiClient } from './client';
import { API_ENDPOINTS } from './endpoints';
import {
  User,
  LoginCredentials,
  RegisterData,
  AuthResponse,
  Investigation,
  InvestigationRequest,
  Analysis,
  AnalysisRequest,
  Report,
  ReportRequest,
} from '@/types/api';

// Authentication Services
export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, data);
  },

  async refreshToken(refreshToken: string): Promise<{ access_token: string; refresh_token: string }> {
    return apiClient.post(API_ENDPOINTS.AUTH.REFRESH, { refresh_token: refreshToken });
  },

  async logout(): Promise<void> {
    return apiClient.post<void>(API_ENDPOINTS.AUTH.LOGOUT);
  },

  async getCurrentUser(): Promise<User> {
    return apiClient.get<User>(API_ENDPOINTS.AUTH.ME);
  },
};

// Investigation Services
export const investigationService = {
  async startInvestigation(request: InvestigationRequest): Promise<Investigation> {
    return apiClient.post<Investigation>(API_ENDPOINTS.INVESTIGATIONS.START, request);
  },

  async getInvestigationStatus(id: string): Promise<Investigation> {
    return apiClient.get<Investigation>(API_ENDPOINTS.INVESTIGATIONS.STATUS(id));
  },

  async getInvestigationResults(id: string): Promise<Investigation> {
    return apiClient.get<Investigation>(API_ENDPOINTS.INVESTIGATIONS.RESULTS(id));
  },

  async getInvestigations(): Promise<Investigation[]> {
    return apiClient.get<Investigation[]>(API_ENDPOINTS.INVESTIGATIONS.LIST);
  },

  async cancelInvestigation(id: string): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.INVESTIGATIONS.CANCEL(id));
  },

  // Server-Sent Events for real-time updates
  createInvestigationStream(id: string): EventSource {
    return apiClient.createEventSource(API_ENDPOINTS.INVESTIGATIONS.STREAM(id));
  },
};

// Analysis Services
export const analysisService = {
  async startAnalysis(request: AnalysisRequest): Promise<Analysis> {
    return apiClient.post<Analysis>(API_ENDPOINTS.ANALYSIS.START, request);
  },

  async getAnalysisStatus(id: string): Promise<Analysis> {
    return apiClient.get<Analysis>(API_ENDPOINTS.ANALYSIS.STATUS(id));
  },

  async getAnalysisResults(id: string): Promise<Analysis> {
    return apiClient.get<Analysis>(API_ENDPOINTS.ANALYSIS.RESULTS(id));
  },

  async getAnalyses(): Promise<Analysis[]> {
    return apiClient.get<Analysis[]>(API_ENDPOINTS.ANALYSIS.LIST);
  },

  async getTrends(params?: Record<string, any>): Promise<any> {
    return apiClient.get(API_ENDPOINTS.ANALYSIS.TRENDS, { params });
  },

  async getCorrelations(params?: Record<string, any>): Promise<any> {
    return apiClient.get(API_ENDPOINTS.ANALYSIS.CORRELATIONS, { params });
  },

  async getPatterns(params?: Record<string, any>): Promise<any> {
    return apiClient.get(API_ENDPOINTS.ANALYSIS.PATTERNS, { params });
  },
};

// Report Services
export const reportService = {
  async generateReport(request: ReportRequest): Promise<Report> {
    return apiClient.post<Report>(API_ENDPOINTS.REPORTS.GENERATE, request);
  },

  async getReportStatus(id: string): Promise<Report> {
    return apiClient.get<Report>(API_ENDPOINTS.REPORTS.STATUS(id));
  },

  async getReport(id: string): Promise<Report> {
    return apiClient.get<Report>(API_ENDPOINTS.REPORTS.GET(id));
  },

  async getReports(): Promise<Report[]> {
    return apiClient.get<Report[]>(API_ENDPOINTS.REPORTS.LIST);
  },

  async deleteReport(id: string): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.REPORTS.DELETE(id));
  },

  // Download report (returns blob URL)
  async downloadReport(id: string): Promise<string> {
    const response = await apiClient.client.get(API_ENDPOINTS.REPORTS.DOWNLOAD(id), {
      responseType: 'blob',
    });
    
    const blob = new Blob([response.data]);
    return URL.createObjectURL(blob);
  },
};

// System Services
export const systemService = {
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return apiClient.healthCheck();
  },

  async getApiInfo(): Promise<any> {
    return apiClient.get(API_ENDPOINTS.INFO);
  },
};