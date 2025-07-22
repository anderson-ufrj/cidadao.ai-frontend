import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen transition-all duration-300" style={{background: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary), var(--bg-tertiary))'}}>
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300" style={{backgroundColor: 'var(--bg-primary)', opacity: '0.9', borderColor: 'var(--border)'}}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-emerald-blue rounded-xl flex items-center justify-center hover-scale shadow-lg">
            <span className="text-white font-bold text-lg">🏛️</span>
          </div>
          <span className="font-bold text-2xl tracking-tight transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
            Cidadão.AI
          </span>
        </div>
        <div className="flex md:flex space-x-4">
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
            <span className="font-semibold transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-medium transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
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
      <section id="about" className="px-6 py-20 relative transition-all duration-300" style={{background: 'linear-gradient(to bottom right, var(--bg-secondary), var(--bg-primary), var(--bg-tertiary))'}}>
        <div className="absolute inset-0 backdrop-blur-sm transition-all duration-300" style={{backgroundColor: 'var(--bg-primary)', opacity: '0.4'}}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 gradient-emerald-blue rounded-2xl shadow-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
            <span className="gradient-text-emerald-blue">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl leading-relaxed font-medium max-w-3xl mx-auto transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 transition-all duration-300" style={{backgroundColor: 'var(--bg-primary)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl card-hover shadow-sm transition-all duration-300" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Análise Inteligente</h3>
              <p className="leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>Detecta anomalias em contratos e despesas públicas usando IA avançada.</p>
            </div>
            <div className="group p-8 rounded-3xl card-hover shadow-sm transition-all duration-300" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Relatórios Visuais</h3>
              <p className="leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>Gráficos e dashboards interativos para visualizar dados públicos.</p>
            </div>
            <div className="group p-8 rounded-3xl card-hover shadow-sm transition-all duration-300" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Transparência Total</h3>
              <p className="leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>Acesso simplificado aos dados governamentais brasileiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
        <a
          href="/credits"
          className="group w-14 h-14 gradient-emerald-blue text-white rounded-full shadow-xl hover:shadow-2xl hover-lift flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
          title="Ver créditos"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
        </a>
        <a
          href="/test-api"
          className="group w-14 h-14 gradient-green-yellow text-white rounded-full shadow-xl hover:shadow-2xl hover-lift flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
          title="Testar API"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
