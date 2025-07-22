import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-emerald-blue rounded-xl flex items-center justify-center hover-scale shadow-lg">
            <span className="text-white font-bold text-lg">🏛️</span>
          </div>
          <span className="font-bold text-2xl gradient-text-emerald-blue tracking-tight">
            Cidadão.AI
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a 
            href="#about" 
            className="group gradient-emerald-blue text-white px-4 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover-lift text-sm font-bold backdrop-blur-sm border border-white/20"
          >
            <span className="flex items-center gap-2">
              {t('nav.about')}
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-blue-100/20 to-yellow-100/20 animate-gradient"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm mb-6">
              <span className="text-emerald-600 font-medium text-sm">🇧🇷 Transparência Pública com IA</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="gradient-text-brazil animate-gradient block mb-2">
              {t('hero.title')}
            </span>
            <span className="text-gray-800 font-semibold">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            {/* Dashboard Access Button */}
            <button className="group relative px-12 py-6 gradient-emerald-blue text-white font-bold rounded-3xl hover-lift shadow-2xl transform transition-all duration-300 text-lg min-w-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">{t('hero.dashboards')}</div>
                  <div className="text-sm opacity-90 font-medium">Visualizações e análises</div>
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>

            {/* Chat with Model Button */}
            <button className="group relative px-12 py-6 bg-white/90 backdrop-blur-sm text-emerald-800 font-bold rounded-3xl border-3 border-emerald-200 hover:border-emerald-400 hover:bg-white hover-lift shadow-2xl transition-all duration-300 text-lg min-w-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 gradient-emerald-blue text-white rounded-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">{t('hero.chat')}</div>
                  <div className="text-sm opacity-70 font-medium">IA conversacional</div>
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 gradient-emerald-blue rounded-2xl shadow-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 tracking-tight">
            <span className="gradient-text-emerald-blue">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100 hover-lift shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Análise Inteligente</h3>
              <p className="text-gray-600 leading-relaxed">Detecta anomalias em contratos e despesas públicas usando IA avançada.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 hover-lift shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Relatórios Visuais</h3>
              <p className="text-gray-600 leading-relaxed">Gráficos e dashboards interativos para visualizar dados públicos.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-white rounded-3xl border border-cyan-100 hover-lift shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparência Total</h3>
              <p className="text-gray-600 leading-relaxed">Acesso simplificado aos dados governamentais brasileiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href="/credits"
          className="group gradient-emerald-blue text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover-lift text-sm font-bold backdrop-blur-sm border border-white/20"
          title="Ver créditos"
        >
          <span className="flex items-center gap-2">
            📜 Créditos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </a>
        <a
          href="/test-api"
          className="group gradient-green-yellow text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover-lift text-sm font-bold backdrop-blur-sm border border-white/20"
          title="Testar API"
        >
          <span className="flex items-center gap-2">
            🧪 Teste API
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </a>
      </div>
    </main>
  );
}
