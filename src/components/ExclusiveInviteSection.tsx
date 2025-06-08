
import { Award, Users, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const ExclusiveInviteSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Award className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Solo 5 Inmobiliarias. <br />
            <span className="text-blue-400">Programa Piloto Exclusivo.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Buscamos <strong className="text-white">5 inmobiliarias de Madrid</strong> para probar y perfeccionar esta herramienta. 
            Tu feedback directo nos ayuda a crear la solución definitiva. <span className="text-blue-400 font-semibold">Acceso gratuito durante todo el piloto.</span>
          </p>

          {/* Barra de Progreso y Plazas */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Programa Piloto
              </h3>
              <span className="text-red-400 font-bold">¡Solo 2 plazas restantes!</span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-600 rounded-full h-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mt-2">
                <span>0 plazas</span>
                <span className="font-semibold">3 de 5 OCUPADAS</span>
                <span>5 plazas máx</span>
              </div>
            </div>
          </div>

          {/* Contador Regresivo */}
          <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-red-300 font-semibold mb-3">
              <AlertTriangle className="w-5 h-5 animate-ping" />
              Inscripciones cierran en:
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold text-white">
              <span>03 Días</span>
              <span>:</span>
              <span>10 Horas</span>
              <span>:</span>
              <span>25 Min</span>
              <span>:</span>
              <span>15 Seg</span>
            </div>
          </div>

          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Acceder al Programa Piloto
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
