
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone, Zap } from 'lucide-react';

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-infone-50 via-white to-infone-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(14,165,233,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-infone-500/10 text-infone-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-infone-200">
            <Zap className="w-4 h-4" />
            PILOTO GRATUITO
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Te Agobia <span className="text-infone-600">Idealista?</span><br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">IA Que Filtra</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-infone-700">IA especializada</strong> que filtra llamadas automáticamente.{' '}
            <span className="text-infone-600 font-semibold">Solo te llegan clientes ideales.</span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              ✅ 100% Gratuito
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              🎯 Filtra Automáticamente
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              ⏰ Ahorra Horas
            </div>
          </div>

          {/* Urgency Alert */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-red-700 font-semibold">
              <Phone className="w-5 h-5 animate-pulse" />
              Solo 2 plazas de 5 disponibles
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-infone-600 to-infone-700 hover:from-infone-700 hover:to-infone-800 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
          >
            ¡ÚNETE GRATIS!
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-gray-500 text-sm mt-4">
            Sin compromiso • Sin tarjeta • Acceso inmediato
          </p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1/2 opacity-10 hidden lg:block">
        <div className="w-full h-full bg-gradient-to-l from-infone-300 to-transparent rounded-l-full"></div>
      </div>
    </section>
  );
};
