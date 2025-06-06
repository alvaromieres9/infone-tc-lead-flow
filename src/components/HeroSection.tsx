
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Phone } from 'lucide-react';

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200">
            <Zap className="w-4 h-4" />
            PILOTO GRATUITO
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            ¿Publicas en <span className="text-[#a3c500]">Idealista</span>?<br />
            Tu teléfono <span className="text-red-500">explota</span>
          </h1>

          {/* Subtitle with highlighted pain point */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            ¿Y si entre tantas llamadas perdidas se te escapa un propietario que quería{' '}
            <span className="bg-yellow-200 px-2 py-1 rounded font-bold text-gray-900">VENDER</span>?
          </p>

          {/* Call to Action Invitation - More Visual */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-10 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
              Te invitamos a co-crear gratis un <strong className="text-blue-700">Asistente IA</strong> que 
              <strong className="text-blue-700"> identifica y protege tus llamadas más valiosas.</strong>
            </p>
          </div>

          {/* Key Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>
              <span className="text-gray-700 font-medium">100% Gratuito</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <span className="text-blue-500 text-lg">🎯</span>
              <span className="text-gray-700 font-medium">Filtra Automáticamente</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <span className="text-pink-500 text-lg">💝</span>
              <span className="text-gray-700 font-medium">Ahorra Horas</span>
            </div>
          </div>

          {/* Urgency Alert */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 font-bold text-lg text-red-700">
              <Phone className="w-6 h-6" />
              Solo 2 plazas de 5 disponibles
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            ¡ÚNETE GRATIS!
            <ArrowDown className="ml-3 w-6 h-6" />
          </Button>

          <p className="text-gray-600 text-sm mt-6">
            Sin compromiso • Sin tarjeta • Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
};
