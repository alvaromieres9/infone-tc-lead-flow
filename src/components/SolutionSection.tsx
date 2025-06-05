
import { ShieldCheck, Zap, Filter, Users, Phone, CheckCircle, Calendar, ArrowDown } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Presentamos tu <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Asistente Inteligente</span>, 24/7.
          </h2>
          <p className="text-lg text-gray-600">Así es como InfOne protege y optimiza tu flujo de llamadas:</p>
        </div>

        {/* Paso 1: Filtro de Intención */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-blue-200 mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Zap className="w-4 h-4" /> PRIORIDAD Nº1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <ShieldCheck className="w-7 h-7 text-blue-600 mr-3" />
              Filtro de Intención: Identifica Oro al Instante.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nuestro Asistente IA atiende cada llamada y, en segundos, identifica la intención real. Si quien llama quiere <strong className="text-gray-800">VENDER</strong> o <strong className="text-gray-800">COMPRAR</strong>, te envía una <strong className="text-red-600">ALERTA PRIORITARIA</strong> a tu móvil. Esa llamada de oro nunca más se perderá en el ruido.
            </p>

            {/* Ejemplo de Alerta */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-700 font-semibold mb-2">
                <Phone className="w-5 h-5 animate-pulse" />
                ALERTA PRIORITARIA - CAPTACIÓN
              </div>
              <p className="text-gray-700 text-sm">
                📞 <strong>Propietario interesado en VENDER</strong><br />
                📍 Piso 3 dormitorios, zona Salamanca<br />
                💰 Valoración estimada: €650.000<br />
                ⏰ Llamada recibida: Hace 2 minutos
              </p>
            </div>
          </div>
        </div>

        {/* Paso 2: Cualificación de Alquileres */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-green-200 mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Filter className="w-4 h-4" /> OPTIMIZACIÓN
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <Users className="w-7 h-7 text-green-600 mr-3" />
              Cualificación Automática: Convierte Ruido en Tiempo.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Para el tsunami de llamadas de alquiler, el asistente aplica <strong className="text-gray-800">TUS criterios</strong> y cualifica automáticamente a los candidatos antes de que lleguen a tu agenda.
            </p>

            {/* Ejemplo de Conversación */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Llamada en curso...</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-gray-800"><strong>IA:</strong> "Buenos días, soy el asistente de Inmobiliaria López. ¿Le interesa el piso de 2 habitaciones en la calle Almagro de €2.500/mes?"</p>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <p className="text-gray-800"><strong>Cliente:</strong> "Sí, ¿cuánto cuesta al mes?"</p>
                </div>
                
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-gray-800"><strong>IA:</strong> "€2.500/mes. Para optimizar su visita, ¿podría confirmarme sus ingresos mensuales y si tiene contrato indefinido?"</p>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <p className="text-gray-800"><strong>Cliente:</strong> "Gano €4.200 al mes y sí, tengo indefinido. Somos una pareja."</p>
                </div>
                
                <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-semibold">Lead cualificado automáticamente</p>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    ✅ Ingresos superiores al 40% del alquiler<br />
                    ✅ Contrato indefinido<br />
                    ✅ Perfil ideal para visita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultado Final */}
        <div className="text-center">
          <ArrowDown className="w-8 h-8 text-gray-400 mx-auto mb-6" />
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6" />
              Resultado: Agenda Cualificada
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-semibold text-blue-100 mb-2">ANTES</p>
                <ul className="space-y-1 text-blue-200">
                  <li>• 20 visitas aleatorias</li>
                  <li>• 80% sin cualificar</li>
                  <li>• Tiempo perdido</li>
                  <li>• Estrés constante</li>
                </ul>
              </div>

              <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                <p className="font-semibold text-green-100 mb-2">DESPUÉS</p>
                <ul className="space-y-1 text-green-200">
                  <li>• 10 visitas cualificadas</li>
                  <li>• 90% perfil ideal</li>
                  <li>• 50% menos visitas</li>
                  <li>• Mayor calidad</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="font-semibold text-yellow-100">
                ✨ Resultado: La mitad de visitas, el doble de calidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
