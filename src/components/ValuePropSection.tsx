import { Target, Filter, Clock, TrendingUp, Phone } from 'lucide-react';

export const ValuePropSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Más Allá de Solo Responder:{' '}
              <span className="text-infone-600">IA Que Optimiza Tu Verdadero Cuello de Botella</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Sabemos que las propiedades se venden rápido. El <strong>valor real</strong> está en optimizar 
              radicalmente el tiempo y recursos de tus agentes, enfocándolos solo en los mejores leads.
            </p>

            <div className="bg-gradient-to-r from-infone-50 to-blue-50 rounded-xl p-6 border border-infone-200 max-w-3xl mx-auto">
              <p className="text-infone-800 font-semibold text-lg">
                🎯 <strong>Resultado:</strong> Reduce drásticamente las visitas perdidas. 
                Encuentra tu inquilino/comprador ideal en potencialmente la mitad de tiempo.
              </p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Muchas Llamadas</h3>
              <p className="text-gray-600 text-sm">Volumen alto post-anuncio Idealista</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-infone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-infone-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Filtro IA Inteligente</h3>
              <p className="text-gray-600 text-sm">Preguntas personalizadas de cualificación</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Leads Priorizados</h3>
              <p className="text-gray-600 text-sm">Solo clientes con perfil ideal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cierre Eficiente</h3>
              <p className="text-gray-600 text-sm">Más conversiones, menos tiempo</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚀 Características Clave del Filtrado Inteligente
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-infone-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">
                      <strong>Atención 24/7:</strong> Nuestro IA maneja el 100% de llamadas de tus anuncios, 
                      sin horarios ni días libres.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">
                      <strong>Preguntas Personalizadas:</strong> Configuras TUS criterios de cualificación 
                      (ingresos, empleo, urgencia, estilo de vida).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">
                      <strong>Priorización Automática:</strong> Agenda visitas priorizando perfiles que 
                      coinciden con tu cliente ideal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">
                      <strong>Identificación de Intención:</strong> Detecta automáticamente si es 
                      comprador/vendedor/inquilino/propietario para enrutamiento inteligente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-infone-600 to-infone-800 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">Ejemplo Real: Piso €2.000/mes</h4>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-sm opacity-90 mb-2">Criterios configurados:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ingresos mínimos: €6.000/mes</li>
                      <li>• Tipo empleo: Indefinido o autónomo</li>
                      <li>• No fumador</li>
                      <li>• Urgencia: Máximo 2 meses</li>
                    </ul>
                  </div>

                  <div className="text-center py-4">
                    <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">Resultado en tiempo real</span>
                    </div>
                  </div>

                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                    <p className="font-semibold text-green-100">
                      ✅ Solo 3 de 20 llamadas pasan el filtro
                    </p>
                    <p className="text-sm text-green-200 mt-1">
                      3 visitas de alta calidad vs. 20 visitas aleatorias
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
