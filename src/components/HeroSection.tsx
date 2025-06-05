
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
            PROGRAMA PIONERO · PLAZAS LIMITADAS
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Tu móvil <span className="text-red-500">explota</span> con llamadas de alquiler.<br />
            ¿Y si la llamada para <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">captar una VENTA</span> se perdió hoy?
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Deja de perder oportunidades de oro. Te invitamos a co-crear gratis un Asistente IA que 
            <strong className="text-blue-700"> identifica y protege tus llamadas más valiosas.</strong>
          </p>

          {/* Key Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              🎯 Protege Captaciones Valiosas
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              🤖 Filtra el Ruido Automáticamente
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              🤝 Co-creación 100% Gratuita
            </div>
          </div>

          {/* Urgency Alert */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-4 mb-10 max-w-2xl mx-auto border-2 border-red-800">
            <div className="flex items-center justify-center gap-3 font-bold text-lg">
              <Phone className="w-6 h-6 animate-pulse" />
              ¡Solo quedan 2 plazas disponibles!
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow"
          >
            ¡PROTEGER MIS OPORTUNIDADES!
            <ArrowDown className="ml-3 w-6 h-6" />
          </Button>

          <p className="text-gray-600 text-sm mt-6">
            Programa exclusivo • Sin compromiso • Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
};
