'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DebugApiPage() {
  const [results, setResults] = useState<Array<{url: string, status: string, data?: any, error?: string}>>([]);
  const [testing, setTesting] = useState(false);

  const testUrls = [
    'https://neural-thinker-cidadao-ai-backend.hf.space',
    'https://neural-thinker-cidadao-ai-backend.hf.space/health',
    'https://neural-thinker-cidadao-ai-backend.hf.space/docs',
  ];

  const testAllUrls = async () => {
    setTesting(true);
    setResults([]);
    
    for (const url of testUrls) {
      try {
        console.log(`Testing: ${url}`);
        
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const contentType = response.headers.get('content-type');
          let data;
          
          if (contentType && contentType.includes('application/json')) {
            data = await response.json();
          } else {
            data = await response.text();
          }

          setResults(prev => [...prev, {
            url,
            status: `✅ ${response.status} ${response.statusText}`,
            data: typeof data === 'string' ? data.substring(0, 200) + '...' : data
          }]);
        } else {
          setResults(prev => [...prev, {
            url,
            status: `❌ ${response.status} ${response.statusText}`,
            error: `HTTP Error ${response.status}`
          }]);
        }
      } catch (error) {
        console.error(`Error testing ${url}:`, error);
        setResults(prev => [...prev, {
          url,
          status: '❌ Network Error',
          error: error instanceof Error ? error.message : 'Unknown error'
        }]);
      }
    }
    
    setTesting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-lg mb-6">
              <span className="text-3xl text-white">🔧</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Debug API
              </span>
              <br />
              <span className="text-gray-800">Connection Tester</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Teste direto de conectividade com múltiplas URLs
            </p>
          </div>

          {/* Test Button */}
          <div className="text-center mb-8">
            <button
              onClick={testAllUrls}
              disabled={testing}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            >
              {testing ? (
                <span className="flex items-center gap-3">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Testando...
                </span>
              ) : (
                'Testar Todas as URLs'
              )}
            </button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border shadow-lg">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {result.status}
                  </h3>
                  <p className="text-sm text-gray-600 break-all">
                    <strong>URL:</strong> {result.url}
                  </p>
                </div>
                
                {result.data && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Response:</p>
                    <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-40">
                      {typeof result.data === 'string' ? result.data : JSON.stringify(result.data, null, 2)}
                    </pre>
                  </div>
                )}
                
                {result.error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <p className="text-red-700 text-sm">
                      <strong>Erro:</strong> {result.error}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Environment Info */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border shadow-lg">
            <h3 className="font-bold text-gray-800 mb-4">Environment Debug</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">NODE_ENV:</span>
                <span className="ml-2">{process.env.NODE_ENV || 'undefined'}</span>
              </div>
              <div>
                <span className="font-medium">API_BASE_URL:</span>
                <span className="ml-2">{process.env.NEXT_PUBLIC_API_BASE_URL || 'undefined'}</span>
              </div>
              <div>
                <span className="font-medium">User Agent:</span>
                <span className="ml-2 text-xs">{typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'Server'}</span>
              </div>
              <div>
                <span className="font-medium">Timestamp:</span>
                <span className="ml-2">{new Date().toISOString()}</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Link
              href="/test-api"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white hover-lift shadow-lg transition-all duration-300"
            >
              ← Voltar para Teste API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}