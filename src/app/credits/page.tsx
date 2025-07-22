import Link from 'next/link';

export default function Credits() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-emerald-blue rounded-xl flex items-center justify-center hover-scale shadow-lg">
            <span className="text-white font-bold text-lg">🏛️</span>
          </div>
          <span className="font-bold text-2xl gradient-text-emerald-blue tracking-tight">
            Cidadão.AI
          </span>
        </Link>
      </nav>

      {/* Credits Content */}
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">📜 Créditos</h1>
        
        <div className="space-y-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Cidadão.AI</strong> é um projeto de pesquisa, software livre e engajamento cívico, idealizado e desenvolvido por <strong>Anderson Henrique da Silva</strong>, como Trabalho de Conclusão de Curso (TCC), sob a orientação da <strong>Profa. Dra. Aracele Garcia de Oliveira Fassbinder</strong>, no <strong>Instituto Federal do Sul de Minas Gerais – Campus Muzambinho</strong>.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Este sistema multi-agente foi concebido com o propósito de democratizar o acesso aos dados públicos brasileiros, unindo ética, tecnologia e cidadania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">👨‍💻 Autor</h2>
              <div className="text-gray-600">
                <p className="font-medium">Anderson Henrique da Silva</p>
                <p className="text-sm mb-3">Bacharelando em Ciência da Computação | Engenheiro de Sistemas de IA</p>
                <div className="space-y-2">
                  <a href="https://github.com/anderson-ufrj" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 GitHub</a>
                  <a href="https://huggingface.co/neural-thinker" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 Hugging Face</a>
                  <a href="https://linkedin.com/in/andersonhenrique27" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 LinkedIn</a>
                  <a href="mailto:andersonhs27@gmail.com" className="block text-blue-600 hover:underline text-sm">📧 andersonhs27@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">🧠 Orientação Acadêmica</h2>
              <div className="text-gray-600">
                <p className="font-medium">Profa. Dra. Aracele Garcia de Oliveira Fassbinder</p>
                <p className="text-sm mb-2">📍 Instituto Federal do Sul de Minas Gerais – Campus Muzambinho</p>
                <a href="#" className="text-blue-600 hover:underline text-sm">🔗 Currículo Lattes</a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🧰 Tecnologias Utilizadas</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>Back-end:</strong> Python, FastAPI, LangChain, ChromaDB, FAISS, BERTimbau</p>
              <p><strong>Banco de Dados:</strong> MongoDB</p>
              <p><strong>Interface:</strong> Gradio, Hugging Face Spaces, Tailwind CSS, HTML5, JavaScript</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🔐 Licenças e Direitos</h2>
            <div className="text-gray-600 space-y-2 text-sm">
              <p>• Código-fonte licenciado sob Apache License 2.0, exceto onde indicado.</p>
              <p>• Todos os modelos e bibliotecas de terceiros respeitam suas respectivas licenças.</p>
              <p>• Os dados públicos utilizados seguem a Lei de Acesso à Informação (Lei nº 12.527/2011).</p>
              <p>• Projeto 100% proprietário. Uso não autorizado do conteúdo pode violar direitos autorais.</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🏛️ Apoio Institucional</h2>
            <div className="text-gray-600 space-y-1 text-sm">
              <p>• Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais</p>
              <p>• Curso de Bacharelado em Ciência da Computação</p>
              <p>• Projeto vinculado à Agenda 2030 – ODS 16: Paz, Justiça e Instituições Eficazes</p>
              <p>• Alinhado às diretrizes da Parceria para Governo Aberto (Open Government Partnership – OGP)</p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📚 Notas de Pesquisa do Autor</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-indigo-200">
                <img 
                  src="/author.jpeg" 
                  alt="Anderson Henrique da Silva" 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Notas de Pesquisa Completas</p>
                  <p className="text-sm text-gray-600 mb-2">Documentação detalhada do processo de pesquisa, metodologia e descobertas durante o desenvolvimento do projeto.</p>
                  <button 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                    onClick={() => window.open('/Notas-de-Pesquisa.pdf', '_blank')}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Visualizar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🌐 Links Oficiais</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-800">Repositório GitHub – Frontend</p>
                <a href="https://github.com/anderson-ufrj/cidadao.ai-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">github.com/anderson-ufrj/cidadao.ai-frontend</a>
                <p className="text-xs text-gray-500">Interface web com HTML, Tailwind CSS e integração via Gradio/Vercel.</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-800">Repositório GitHub – Backend</p>
                <a href="https://github.com/anderson-ufrj/cidadao.ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">github.com/anderson-ufrj/cidadao.ai-backend</a>
                <p className="text-xs text-gray-500">Sistema multi-agente em Python, FastAPI, LangChain, ChromaDB e FAISS.</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-800">Documentação Técnica dos Algoritmos</p>
                <a href="https://anderson-ufrj.github.io/cidadao.ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">anderson-ufrj.github.io/cidadao.ai-backend</a>
                <p className="text-xs text-gray-500">Documentação completa dos algoritmos de IA e arquitetura do sistema backend.</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-800">Demonstração Interativa (Backend)</p>
                <a href="https://huggingface.co/spaces/neural-thinker/cidadao.ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">huggingface.co/spaces/neural-thinker/cidadao.ai-backend</a>
              </div>
              
              <div>
                <p className="font-medium text-gray-800">Interface Web (Frontend Deploy)</p>
                <a href="https://cidadao-ai-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">cidadao-ai-frontend.vercel.app</a>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
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
    </main>
  );
}