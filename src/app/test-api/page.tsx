import Link from 'next/link';

export default function TestApiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 gradient-emerald-blue rounded-2xl shadow-lg mb-6">
              <span className="text-3xl">🧪</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-brazil bg-clip-text text-transparent">
                Teste de Integração
              </span>
              <br />
              <span className="text-gray-800">Cidadão.AI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Verificação da conectividade entre frontend e backend
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Backend Status */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-emerald-100 hover-lift shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-emerald-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl text-white">🏥</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Status do Backend
                </h2>
              </div>
              
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Backend URL:</p>
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-2xl border border-emerald-200">
                  <code className="text-emerald-700 font-mono text-sm break-all">
                    {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}
                  </code>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-emerald-700 font-bold">Configuração detectada!</p>
              </div>
            </div>

            {/* API Documentation Links */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 hover-lift shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-emerald-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl text-white">📚</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Documentação da API
                </h2>
              </div>
              
              <div className="space-y-4">
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/docs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link block p-5 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 hover:border-emerald-300 hover-lift transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Swagger UI</h3>
                      <p className="text-sm text-gray-600">Interface interativa da API</p>
                    </div>
                    <svg className="w-5 h-5 text-emerald-600 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/redoc`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link block p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:border-blue-300 hover-lift transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">ReDoc</h3>
                      <p className="text-sm text-gray-600">Documentação alternativa</p>
                    </div>
                    <svg className="w-5 h-5 text-blue-600 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/health`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link block p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 hover:border-yellow-300 hover-lift transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Health Check</h3>
                      <p className="text-sm text-gray-600">Verificar status do servidor</p>
                    </div>
                    <svg className="w-5 h-5 text-yellow-600 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
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