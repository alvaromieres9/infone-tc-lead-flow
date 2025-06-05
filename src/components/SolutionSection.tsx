
import { ShieldCheck, Zap, Filter, Users } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Presentamos tu <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Portero Inteligente</span>, 24/7.
          </h2>
          <p className="text-lg text-gray-600">Así es como Infone protege y optimiza tu flujo de llamadas:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Paso 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-blue-200">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Zap className="w-4 h-4" /> PRIORIDAD Nº1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <ShieldCheck className="w-7 h-7 text-blue-600 mr-3" />
              Filtro de Intención: Identifica Oro al Instante.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestro Asistente IA atiende cada llamada y, en segundos, identifica la intención real. Si quien llama quiere <strong className="text-gray-800">VENDER</strong> o <strong className="text-gray-800">COMPRAR</strong>, te envía una <strong className="text-red-600">ALERTA PRIORITARIA</strong> a tu móvil. Esa llamada de oro nunca más se perderá en el ruido.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-blue-200">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Filter className="w-4 h-4" /> OPTIMIZACIÓN
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <Users className="w-7 h-7 text-green-600 mr-3" />
              Cualificación Automática: Convierte Ruido en Tiempo.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Para el tsunami de llamadas de alquiler, el asistente aplica <strong className="text-gray-800">TUS criterios</strong> (ingresos, contrato, etc.), cualifica a los candidatos y te entrega una lista priorizada. Resultado: menos visitas, inquilinos de más calidad y horas de vuelta para tus agentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
