'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { systemService } from '@/lib/api/services';
import { useAuthStore } from '@/stores/authStore';
import { LoginForm } from '@/components/auth/LoginForm';
import { toast } from 'sonner';

export default function TestApiPage() {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [isTestingHealth, setIsTestingHealth] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const testHealthCheck = async () => {
    setIsTestingHealth(true);
    try {
      const status = await systemService.healthCheck();
      setHealthStatus(status);
      toast.success('Backend conectado com sucesso!');
    } catch (error) {
      console.error('Health check failed:', error);
      toast.error('Erro ao conectar com o backend');
      setHealthStatus({ error: 'Connection failed' });
    } finally {
      setIsTestingHealth(false);
    }
  };

  const handleLoginSuccess = () => {
    toast.success('Login realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            🧪 Teste de Integração - Cidadão.AI
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backend Health Check */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">
                🏥 Status do Backend
              </h2>
              
              <Button 
                onClick={testHealthCheck}
                disabled={isTestingHealth}
                className="mb-4"
              >
                {isTestingHealth ? 'Testando...' : 'Testar Conexão'}
              </Button>

              {healthStatus && (
                <div className="mt-4">
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                    {JSON.stringify(healthStatus, null, 2)}
                  </pre>
                </div>
              )}

              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Backend URL:</strong></p>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}
                </code>
              </div>
            </div>

            {/* Authentication Test */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">
                🔐 Teste de Autenticação
              </h2>

              {!isAuthenticated ? (
                <LoginForm onSuccess={handleLoginSuccess} />
              ) : (
                <div className="text-center">
                  <div className="mb-4 p-4 bg-green-100 border border-green-200 rounded">
                    <p className="text-green-800">
                      ✅ Usuário autenticado com sucesso!
                    </p>
                  </div>
                  
                  <div className="mb-4 text-sm text-left bg-gray-100 p-3 rounded">
                    <strong>Dados do usuário:</strong>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                  </div>

                  <Button onClick={logout} variant="outline">
                    Sair
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* API Documentation Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mt-8">
            <h2 className="text-xl font-semibold mb-4">
              📚 Documentação da API
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/docs`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded hover:bg-gray-50"
              >
                <h3 className="font-medium">Swagger UI</h3>
                <p className="text-sm text-gray-600">Interface interativa da API</p>
              </a>
              
              <a
                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/redoc`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded hover:bg-gray-50"
              >
                <h3 className="font-medium">ReDoc</h3>
                <p className="text-sm text-gray-600">Documentação alternativa</p>
              </a>
              
              <a
                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/openapi.json`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded hover:bg-gray-50"
              >
                <h3 className="font-medium">OpenAPI JSON</h3>
                <p className="text-sm text-gray-600">Schema da API</p>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/"
              className="text-blue-600 hover:underline"
            >
              ← Voltar para a página inicial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}