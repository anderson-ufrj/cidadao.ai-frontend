import Link from 'next/link';

export default function Credits() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center bg-white border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🏛️</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Cidadão.AI
          </span>
        </Link>
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
          ← Voltar
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
                <p className="font-medium text-gray-800">Documentação Técnica</p>
                <a href="https://anderson-ufrj.github.io/cidadao.ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">anderson-ufrj.github.io/cidadao.ai-backend</a>
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
      </div>
    </main>
  );
}