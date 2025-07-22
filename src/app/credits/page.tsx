'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Sobre() {
  return (
    <main className="min-h-screen transition-all duration-300" style={{background: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary), var(--bg-tertiary))'}}>
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300" style={{backgroundColor: 'var(--bg-primary)', opacity: '0.9', borderColor: 'var(--border)'}}>
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-emerald-blue rounded-xl flex items-center justify-center hover-scale shadow-lg">
            <span className="text-white font-bold text-lg">🏛️</span>
          </div>
          <span className="font-bold text-2xl gradient-text-emerald-blue tracking-tight">
            Cidadão.AI
          </span>
        </Link>
        <div className="flex space-x-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Credits Content */}
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>ℹ️ Sobre</h1>
        
        <div className="space-y-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
              <strong>Cidadão.AI</strong> é um projeto de pesquisa, software livre e engajamento cívico, idealizado e desenvolvido por <strong>Anderson Henrique da Silva</strong>, como Trabalho de Conclusão de Curso (TCC), sob a orientação da <strong>Profa. Dra. Aracele Garcia de Oliveira Fassbinder</strong>, no <strong>Instituto Federal do Sul de Minas Gerais – Campus Muzambinho</strong>.
            </p>
            
            <p className="text-lg leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
              Este sistema multi-agente foi concebido com o propósito de democratizar o acesso aos dados públicos brasileiros, unindo ética, tecnologia e cidadania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="section-gray p-6 rounded-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>👨‍💻 Autor</h2>
              <div className="transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
                <p className="font-medium transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Anderson Henrique da Silva</p>
                <p className="text-sm mb-3 transition-colors duration-300" style={{color: 'var(--text-tertiary)'}}>Bacharelando em Ciência da Computação | Engenheiro de Sistemas de IA</p>
                <div className="space-y-2">
                  <a href="https://github.com/anderson-ufrj" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 GitHub</a>
                  <a href="https://huggingface.co/neural-thinker" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 Hugging Face</a>
                  <a href="https://linkedin.com/in/andersonhenrique27" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 LinkedIn</a>
                  <a href="mailto:andersonhs27@gmail.com" className="block text-blue-600 hover:underline text-sm">📧 andersonhs27@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="section-gray p-6 rounded-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>🧠 Orientação Acadêmica</h2>
              <div className="transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
                <p className="font-medium transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Profa. Dra. Aracele Garcia de Oliveira Fassbinder</p>
                <p className="text-sm mb-2 transition-colors duration-300" style={{color: 'var(--text-tertiary)'}}>📍 Instituto Federal do Sul de Minas Gerais – Campus Muzambinho</p>
                <a href="#" className="text-blue-600 hover:underline text-sm">🔗 Currículo Lattes</a>
              </div>
            </div>
          </div>

          <div className="section-blue p-6 rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>🧰 Tecnologias Utilizadas</h2>
            <div className="space-y-2 transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
              <p><strong>Backend API:</strong> Python, FastAPI, LangChain, ChromaDB, FAISS, BERTimbau</p>
              <p><strong>Banco de Dados:</strong> MongoDB</p>
              <p><strong>Frontend:</strong> Next.js 15, React 18, TypeScript, Tailwind CSS, Zustand</p>
              <p><strong>API Documentation:</strong> Swagger UI, ReDoc (automático)</p>
              <p><strong>Deploy:</strong> Vercel (Frontend), Hugging Face Spaces (Backend API)</p>
              <p><strong>Internacionalização:</strong> next-intl (Português/Inglês)</p>
            </div>
          </div>

          <div className="section-green p-6 rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>🔐 Licenças e Direitos</h2>
            <div className="space-y-2 text-sm transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
              <p>• Código-fonte licenciado sob Apache License 2.0.</p>
              <p>• Todos os modelos e bibliotecas de terceiros respeitam suas respectivas licenças.</p>
              <p>• Os dados públicos utilizados seguem a Lei de Acesso à Informação (Lei nº 12.527/2011).</p>
              <p>• Projeto 100% proprietário. Uso não autorizado do conteúdo pode violar direitos autorais.</p>
            </div>
          </div>

          <div className="section-purple p-6 rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>🏛️ Apoio Institucional</h2>
            <div className="space-y-1 text-sm transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
              <p>• Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais</p>
              <p>• Curso de Bacharelado em Ciência da Computação</p>
              <p>• Projeto vinculado à Agenda 2030 – ODS 16: Paz, Justiça e Instituições Eficazes</p>
              <p>• Alinhado às diretrizes da Parceria para Governo Aberto (Open Government Partnership – OGP)</p>
            </div>
          </div>

          <div className="section-indigo p-6 rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>📚 Notas de Pesquisa do Autor</h2>
            <div className="space-y-4">
              <div className="section-white flex items-center gap-4 p-4 rounded-lg transition-all duration-300 border border-indigo-200">
                <img 
                  src="/author.jpeg" 
                  alt="Anderson Henrique da Silva" 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className="font-medium transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Notas de Pesquisa Completas</p>
                  <p className="text-sm mb-2 transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>Documentação detalhada do processo de pesquisa, metodologia e descobertas durante o desenvolvimento do projeto.</p>
                  <a 
                    href="/Notas-de-Pesquisa.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Visualizar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section-yellow p-6 rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>🌐 Links Oficiais</h2>
            <div className="space-y-4 text-sm">
              <div className="section-white flex items-center gap-4 p-4 rounded-lg transition-all duration-300 border border-yellow-200">
                <div className="text-3xl">📚</div>
                <div className="flex-1">
                  <p className="font-medium transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Hub de Documentação Oficial</p>
                  <a href="https://anderson-ufrj.github.io/cidadao.ai-docs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block text-base font-medium">anderson-ufrj.github.io/cidadao.ai-docs/</a>
                  <p className="text-xs mt-1 transition-colors duration-300" style={{color: 'var(--text-tertiary)'}}>Documentação completa do projeto, guias de uso, arquitetura e API.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 backdrop-blur-sm font-bold rounded-2xl border-2 hover-lift shadow-lg transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-accent)',
              borderColor: 'var(--border)',
              opacity: '0.9'
            }}
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