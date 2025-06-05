
import { Crown, Users, Star, Zap } from 'lucide-react';

export const ExclusiveInviteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-200">
            <Crown className="w-5 h-5" />
            INVITACIÓN EXCLUSIVA
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            No Buscamos Clientes. <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Buscamos a 5 Socios Fundadores.
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Infone está seleccionando a <strong>5 inmobiliarias visionarias de Madrid</strong> para ser las arquitectas de esta herramienta. 
            No queremos venderte un software, queremos <span className="text-purple-600 font-semibold">construirlo contigo.</span> 
            Tu experiencia y tu feedback directo darán forma a la solución definitiva que liderará el mercado.
          </p>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Consejo Fundador
              </h3>
              <span className="text-red-600 font-bold">¡Solo 2 plazas restantes!</span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-6 rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 plazas</span>
                <span className="font-semibold">3 de 5 CUBIERTAS</span>
                <span>5 plazas máx</span>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-5 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Plaza 1: <strong>CUBIERTA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Plaza 2: <strong>CUBIERTA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Plaza 3: <strong>CUBIERTA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Plaza 4: <strong>DISPONIBLE</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Plaza 5: <strong>DISPONIBLE</strong></span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Socio, No Cliente</h3>
              <p className="text-gray-600 text-sm">
                Tu voz diseña el producto final. Eres pionero, no usuario.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Acceso Total</h3>
              <p className="text-gray-600 text-sm">
                Herramienta completa sin coste durante todo el desarrollo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Líder del Sector</h3>
              <p className="text-gray-600 text-sm">
                Ventaja competitiva exclusiva sobre el resto del mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
