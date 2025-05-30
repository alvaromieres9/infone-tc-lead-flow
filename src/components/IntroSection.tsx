
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

export const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-infone-600">Infone TC:</span> Inteligencia Artificial,{' '}
              <span className="bg-gradient-to-r from-infone-600 to-infone-800 bg-clip-text text-transparent">
                Conversaciones Reales
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Especializados en <strong>Asistentes IA Telefónicos</strong> que suenan completamente naturales.
              Tras exitosos proyectos en el sector restauración, ahora{' '}
              <span className="text-infone-700 font-semibold">co-creamos con pioneros inmobiliarios como tú.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">IA Conversacional Avanzada</h3>
                  <p className="text-gray-600">
                    Nuestros asistentes mantienen conversaciones fluidas e indistinguibles de un humano.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Probado en Sector Restauración</h3>
                  <p className="text-gray-600">
                    Gestión exitosa de reservas y consultas, optimizando recursos operativos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-infone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-infone-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Misión: Revolucionar Inmobiliarias</h3>
                  <p className="text-gray-600">
                    Aplicar nuestra tecnología probada al sector inmobiliario, colaborando contigo en el diseño.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-infone-100 to-infone-200 rounded-2xl p-8 border border-infone-300">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Llamada en curso...</span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong>IA:</strong> "Buenos días, soy el asistente de Inmobiliaria López. 
                        ¿Le interesa el piso de 2 habitaciones en Malasaña?"
                      </p>
                    </div>
                    
                    <div className="bg-infone-50 p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong>Cliente:</strong> "Sí, ¿cuánto cuesta al mes?"
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong>IA:</strong> "€1.800/mes. Para optimizar su visita, ¿podría confirmarme 
                        sus ingresos mensuales y si es fumador?"
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-green-600 font-medium">
                      ✅ Lead cualificado automáticamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
