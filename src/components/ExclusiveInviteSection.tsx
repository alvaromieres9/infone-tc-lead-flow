
import { Users, Star, Zap } from 'lucide-react';

export const ExclusiveInviteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Solo 5 Inmobiliarias. <br />
            <span className="text-blue-600">
              Programa Piloto Exclusivo.
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Buscamos <strong>5 inmobiliarias de Madrid</strong> para probar y perfeccionar esta herramienta. 
            Tu feedback directo nos ayuda a crear la solución definitiva. <span className="text-blue-600 font-semibold">Acceso gratuito durante todo el piloto.</span>
          </p>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Programa Piloto
              </h3>
              <span className="text-red-600 font-bold">¡Solo 2 plazas restantes!</span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 plazas</span>
                <span className="font-semibold">3 de 5 OCUPADAS</span>
                <span>5 plazas máx</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Acceso Gratuito</h3>
              <p className="text-gray-600 text-sm">
                Uso completo sin coste durante todo el desarrollo.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Tu Feedback Cuenta</h3>
              <p className="text-gray-600 text-sm">
                Ayudas a diseñar la herramienta perfecta para inmobiliarias.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Ventaja Competitiva</h3>
              <p className="text-gray-600 text-sm">
                Serás de las primeras en dominar esta tecnología.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
