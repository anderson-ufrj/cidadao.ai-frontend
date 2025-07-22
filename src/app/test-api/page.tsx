'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HealthResponse {
  status: string;
  timestamp: string;
  uptime?: number;
  version?: string;
}

export default function TestApiPage() {
  const [healthData, setHealthData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string>('');

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://neural-thinker-cidadao-ai-backend.hf.space';
    setApiUrl(baseUrl);
    testApiConnection(baseUrl);
  }, []);

  const testApiConnection = async (baseUrl: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log('Testing API connection to:', `${baseUrl}/health`);

      // Test health endpoint with timeout and proper headers
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(`${baseUrl}/health`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        mode: 'cors', // Explicitly set CORS mode
      });

      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setHealthData(data);
    } catch (err) {
      console.error('API Connection Error:', err);
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          setError('Timeout: A API não respondeu em 10 segundos');
        } else if (err.message.includes('fetch')) {
          setError('Erro de rede: Verifique sua conexão ou se a API está online');
        } else {
          setError(`Erro: ${err.message}`);
        }
      } else {
        setError('Erro desconhecido ao conectar com a API');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    testApiConnection(apiUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 gradient-emerald-blue rounded-2xl shadow-lg mb-6">
              <span className="text-3xl">🧪</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text-brazil">
                Teste de Integração
              </span>
              <br />
              <span className="text-gray-800">Cidadão.AI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Verificação em tempo real da conectividade com o backend
            </p>
          </div>

          {/* API Status Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-emerald-100 shadow-xl mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 gradient-emerald-blue rounded-2xl flex items-center justify-center">
                <span className="text-xl text-white">🏥</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Status da API</h2>
                <p className="text-gray-600">Endpoint: <code className="text-sm bg-gray-100 px-2 py-1 rounded">{apiUrl}</code></p>
                <p className="text-xs text-gray-500 mt-1">
                  Ambiente: {process.env.NODE_ENV} | 
                  Var: {process.env.NEXT_PUBLIC_API_BASE_URL ? '✅' : '❌'}
                </p>
              </div>
            </div>

            {loading && (
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                <span className="text-blue-700 font-medium">Testando conexão...</span>
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
                  onClick={handleRetry}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Tentar Novamente
                </button>
              </div>
            )}

            {healthData && (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <span className="text-emerald-700 font-bold">API Online!</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="ml-2 text-emerald-600">{healthData.status}</span>
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
              href={`${apiUrl}/docs`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 hover:border-blue-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  📚
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Swagger UI</h3>
                <p className="text-sm text-gray-600">Documentação interativa</p>
              </div>
            </a>

            <a 
              href={`${apiUrl}/redoc`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 hover:border-purple-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  📖
                </div>
                <h3 className="font-bold text-gray-800 mb-1">ReDoc</h3>
                <p className="text-sm text-gray-600">Documentação alternativa</p>
              </div>
            </a>

            <button 
              onClick={handleRetry}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:border-emerald-300 hover-lift transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  🔄
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Retestar</h3>
                <p className="text-sm text-gray-600">Verificar novamente</p>
              </div>
            </button>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-emerald-700 font-bold rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 hover:bg-white hover-lift shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}