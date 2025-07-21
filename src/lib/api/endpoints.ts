// API endpoint constants
export const API_ENDPOINTS = {
  // Health
  HEALTH: '/health',
  HEALTH_DETAILED: '/health/detailed',

  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },

  // OAuth
  OAUTH: {
    GOOGLE: '/auth/oauth/google',
    GITHUB: '/auth/oauth/github',
    CALLBACK: '/auth/oauth/callback',
  },

  // Investigations
  INVESTIGATIONS: {
    START: '/api/v1/investigations/start',
    STATUS: (id: string) => `/api/v1/investigations/${id}/status`,
    RESULTS: (id: string) => `/api/v1/investigations/${id}/results`,
    STREAM: (id: string) => `/api/v1/investigations/stream/${id}`,
    LIST: '/api/v1/investigations/',
    CANCEL: (id: string) => `/api/v1/investigations/${id}`,
  },

  // Analysis
  ANALYSIS: {
    START: '/api/v1/analysis/start',
    TRENDS: '/api/v1/analysis/trends',
    CORRELATIONS: '/api/v1/analysis/correlations',
    PATTERNS: '/api/v1/analysis/patterns',
    STATUS: (id: string) => `/api/v1/analysis/${id}/status`,
    RESULTS: (id: string) => `/api/v1/analysis/${id}/results`,
    LIST: '/api/v1/analysis/',
  },

  // Reports
  REPORTS: {
    GENERATE: '/api/v1/reports/generate',
    STATUS: (id: string) => `/api/v1/reports/${id}/status`,
    GET: (id: string) => `/api/v1/reports/${id}`,
    DOWNLOAD: (id: string) => `/api/v1/reports/${id}/download`,
    LIST: '/api/v1/reports/',
    DELETE: (id: string) => `/api/v1/reports/${id}`,
  },

  // Audit
  AUDIT: {
    LOGS: '/audit/logs',
    EVENTS: '/audit/events',
    REPORT: '/audit/report',
  },

  // API Info
  INFO: '/api/v1/info',
} as const;