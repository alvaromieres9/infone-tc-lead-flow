
import { Button } from '@/components/ui/button';
import { ArrowDown, AlertTriangle } from 'lucide-react';

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(220,38,38,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Publicas en <span className="text-[#c4d82b]">Idealista.</span><br />
            Tu teléfono explota.
          </h1>

          {/* Pain Point Question */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-red-800 leading-relaxed">
              ¿Y si entre tantas llamadas perdidas se te escapa un propietario que quería <span className="underline decoration-red-500">vender?</span>
            </p>
          </div>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Deja de perder oportunidades de oro en un mar de llamadas de alquiler. 
            Te invitamos a <strong className="text-red-600">co-crear un Asistente IA</strong> que protege tus captaciones más valiosas.
          </p>

          {/* Urgency Alert */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-4 mb-10 max-w-2xl mx-auto border-2 border-red-800">
            <div className="flex items-center justify-center gap-3 font-bold text-lg">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              Solo 2 plazas restantes de 5
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow"
          >
            PROTEGER MIS OPORTUNIDADES
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
