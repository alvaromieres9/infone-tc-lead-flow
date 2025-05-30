
import { Crown, Users, Lightbulb, Gift } from 'lucide-react';

export const PilotSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-orange-200">
            <Crown className="w-5 h-5" />
            PROGRAMA PILOTO EXCLUSIVO
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solo 5 Inmobiliarias:{' '}
            <span className="bg-gradient-to-r from-infone-600 to-purple-600 bg-clip-text text-transparent">
              Co-Crea Tu IA Perfecta
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Buscamos <strong>5 inmobiliarias de Madrid.</strong> 
            Tu feedback diseña la herramienta. Uso gratuito + pionero de la industria.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-infone-50 to-blue-50 rounded-xl p-6 border border-infone-200">
              <div className="w-12 h-12 bg-infone-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-infone-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Solo 5 Agencias</h3>
              <p className="text-gray-600 text-sm">
                Atención personalizada garantizada.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Tu Voz Cuenta</h3>
              <p className="text-gray-600 text-sm">
                Feedback semanal. Diseñas el producto final.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">100% Gratuito</h3>
              <p className="text-gray-600 text-sm">
                Uso completo + descuentos futuros.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">¿Qué Incluye?</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Implementación gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Configuración personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Reportes semanales</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Feedback directo con equipo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Acceso a nuevas funciones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Certificado de "Pionera IA"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Descuentos exclusivos</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <p className="text-center text-lg font-semibold">
                💡 <strong>Solo necesitas:</strong> 4 semanas de uso + feedback semanal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
