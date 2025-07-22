'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HealthResponse {
  status: string;
  timestamp: string;
  uptime?: number;
  version?: string;
}

export default function QuickTestPage() {
  const [healthData, setHealthData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Force the correct URL - hardcoded to avoid env var issues
  const API_URL = 'https://neural-thinker-cidadao-ai-backend.hf.space';

  useEffect(() => {
    testApiConnection();
  }, []);

  const testApiConnection = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Testing API connection to:', `${API_URL}/health`);

      const response = await fetch(`${API_URL}/health`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setHealthData(data);
    } catch (err) {
      console.error('API Connection Error:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-lg mb-6">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Quick Test
              </span>
              <br />
              <span className="text-gray-800">Direct API Connection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Teste direto sem variáveis de ambiente
            </p>
          </div>

          {/* API Status Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-100 shadow-xl mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-xl text-white">🚀</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">API Direct Test</h2>
                <p className="text-gray-600">URL: <code className="text-sm bg-gray-100 px-2 py-1 rounded">{API_URL}</code></p>
                <p className="text-xs text-green-600 mt-1">✅ URL hardcoded - sem dependência de env vars</p>
              </div>
            </div>

            {loading && (
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                <span className="text-blue-700 font-medium">Testando conexão direta...</span>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 rounded-2xl border border-red-200 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">❌</span>
                  </div>
                  <span className="text-red-700 font-bold">Erro de Conexão</span>
                </div>
                <p className="text-red-600 text-sm mb-4">{error}</p>
                <button 
                  onClick={testApiConnection}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Tentar Novamente
                </button>
              </div>
            )}

            {healthData && (
              <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <span className="text-green-700 font-bold">API Online e Funcionando!</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="ml-2 text-green-600">{healthData.status}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Timestamp:</span>
                    <span className="ml-2 text-gray-600">{new Date(healthData.timestamp).toLocaleString('pt-BR')}</span>
                  </div>
                  {healthData.uptime && (
                    <div>
                      <span className="font-medium text-gray-700">Uptime:</span>
                      <span className="ml-2 text-gray-600">{Math.round(healthData.uptime)} segundos</span>
                    </div>
                  )}
                  {healthData.version && (
                    <div>
                      <span className="font-medium text-gray-700">Versão:</span>
                      <span className="ml-2 text-gray-600">{healthData.version}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a 
              href={`${API_URL}/docs`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 hover:border-blue-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  📚
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Swagger UI</h3>
                <p className="text-sm text-gray-600">Documentação oficial</p>
              </div>
            </a>

            <a 
              href={`${API_URL}/redoc`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 hover:border-purple-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  📖
                </div>
                <h3 className="font-bold text-gray-800 mb-1">ReDoc</h3>
                <p className="text-sm text-gray-600">Docs alternativas</p>
              </div>
            </a>

            <a 
              href={`${API_URL}/health`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 hover:border-green-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  ❤️
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Health JSON</h3>
                <p className="text-sm text-gray-600">Raw API response</p>
              </div>
            </a>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              href="/test-api"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white hover-lift shadow-lg transition-all duration-300"
            >
              ← Voltar para Test API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}