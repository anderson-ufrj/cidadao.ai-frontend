import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🏛️</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Cidadão.AI
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t('nav.features')}
          </a>
          <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t('nav.about')}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('hero.explore')}
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
              {t('hero.demo')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">R$ 2.1T</div>
              <div className="text-slate-600 dark:text-slate-400">{t('stats.contracts')}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">100M+</div>
              <div className="text-slate-600 dark:text-slate-400">{t('stats.expenses')}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">88.9%</div>
              <div className="text-slate-600 dark:text-slate-400">{t('stats.precision')}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform">&lt; 3s</div>
              <div className="text-slate-600 dark:text-slate-400">{t('stats.response')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                {t('features.multiAgent.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('features.multiAgent.description')}
              </p>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                {t('features.anomaly.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('features.anomaly.description')}
              </p>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                {t('features.visualization.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('features.visualization.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            {t('about.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">🏛️</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Cidadão.AI
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {t('footer.tagline')}
          </p>
        </div>
      </footer>
    </main>
  );
}
