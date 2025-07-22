export default function TestApiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            🧪 Teste de Integração - Cidadão.AI
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backend Status */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">
                🏥 Status do Backend
              </h2>
              
              <div className="mb-4 text-sm text-gray-600">
                <p><strong>Backend URL:</strong></p>
                <code className="bg-gray-100 px-2 py-1 rounded block mt-2">
                  {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}
                </code>
              </div>

              <p className="text-green-600 font-medium">✅ Configuração detectada!</p>
            </div>

            {/* API Documentation Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">
                📚 Documentação da API
              </h2>
              
              <div className="space-y-3">
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/docs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border rounded hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium">Swagger UI</h3>
                  <p className="text-sm text-gray-600">Interface interativa da API</p>
                </a>
                
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/redoc`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border rounded hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium">ReDoc</h3>
                  <p className="text-sm text-gray-600">Documentação alternativa</p>
                </a>
                
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/health`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border rounded hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium">Health Check</h3>
                  <p className="text-sm text-gray-600">Verificar status do servidor</p>
                </a>
              </div>
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