// API Types for Cidadao.AI Frontend
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: 'bearer';
  expires_in: number;
  user: User;
}

// Investigation Types
export interface InvestigationRequest {
  entity_type: 'contract' | 'expense' | 'agreement' | 'bidding' | 'servant';
  filters: {
    date_range: {
      start: string;
      end: string;
    };
    amount_range?: {
      min: number;
      max: number;
    };
    entity_name?: string;
    cpf_cnpj?: string;
    city?: string;
    state?: string;
  };
  analysis_type: 'anomaly_detection' | 'pattern_analysis' | 'correlation_analysis';
  ai_prompt?: string;
}

export interface Investigation {
  id: string;
  user_id: string;
  status: 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';
  progress: number;
  request: InvestigationRequest;
  results?: InvestigationResult;
  error_message?: string;
  created_at: string;
  updated_at: string;
  completed_at?: string;
  estimated_completion?: string;
}

export interface InvestigationResult {
  summary: {
    total_records_analyzed: number;
    anomalies_found: number;
    patterns_detected: number;
    risk_score: number;
    confidence_level: number;
  };
  findings: Finding[];
  recommendations: string[];
  data_sources: string[];
  methodology: string;
}

export interface Finding {
  id: string;
  type: 'anomaly' | 'pattern' | 'correlation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  evidence: Record<string, any>;
  confidence: number;
  impact_assessment: string;
  recommendations: string[];
}

// Analysis Types  
export interface AnalysisRequest {
  investigation_ids: string[];
  analysis_type: 'trends' | 'correlations' | 'patterns' | 'comparisons';
  parameters: Record<string, any>;
}

export interface Analysis {
  id: string;
  user_id: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  request: AnalysisRequest;
  results?: AnalysisResult;
  created_at: string;
  updated_at: string;
}

export interface AnalysisResult {
  charts: ChartData[];
  insights: Insight[];
  summary: string;
  metadata: Record<string, any>;
}

export interface ChartData {
  id: string;
  type: 'line' | 'bar' | 'pie' | 'scatter' | 'heatmap';
  title: string;
  data: any;
  config: Record<string, any>;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'trend' | 'correlation' | 'outlier' | 'pattern';
  confidence: number;
  impact: 'low' | 'medium' | 'high';
}

// Report Types
export interface ReportRequest {
  investigation_ids: string[];
  analysis_ids: string[];
  format: 'pdf' | 'html' | 'docx';
  template: 'standard' | 'executive' | 'detailed' | 'custom';
  customizations: {
    include_charts: boolean;
    include_raw_data: boolean;
    include_methodology: boolean;
    custom_sections: string[];
  };
}

export interface Report {
  id: string;
  user_id: string;
  status: 'queued' | 'generating' | 'completed' | 'failed';
  request: ReportRequest;
  file_url?: string;
  file_size?: number;
  created_at: string;
  updated_at: string;
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
  timestamp: string;
}

export interface ApiError {
  error: string;
  detail?: string;
  status_code: number;
  timestamp: string;
}