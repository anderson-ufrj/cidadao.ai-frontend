import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center bg-white border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🏛️</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Cidadão.AI
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
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
            <span className="text-gray-800">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('hero.explore')}
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Navigation Links (bottom) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-2">
        <a
          href="/credits"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm font-medium"
          title="Ver créditos"
        >
          📜 Créditos
        </a>
        <a
          href="/test-api"
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm font-medium"
          title="Testar API"
        >
          🧪 Teste API
        </a>
      </div>
    </main>
  );
}
