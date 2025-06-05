
import { Shield, AlertTriangle, Target, Clock, CheckCircle } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Imagina un <span className="text-blue-600">Portero Inteligente</span> en tu Línea, 24/7.
            </h2>
          </div>

          {/* Paso 1: Lo Urgente */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                🥇 Paso 1: Lo Urgente - El Filtro de Intención
              </h3>
              <p className="text-xl text-center mb-8">
                Primero, lo más importante: <strong>Identificar Oro.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-red-800 mb-2">¿Quiere VENDER?</h4>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  🔴 ALERTA PRIORITARIA!
                </div>
                <p className="text-sm text-gray-700">
                  Notificación instantánea. Esa llamada no se pierde. NUNCA.
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">¿Quiere COMPRAR?</h4>
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  💎 LEAD CUALIFICADO
                </div>
                <p className="text-sm text-gray-700">
                  Contacto de alto valor para seguimiento inmediato.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-blue-800 mb-2">¿Quiere ALQUILAR?</h4>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  ⚙️ PROTOCOLO OPTIMIZACIÓN
                </div>
                <p className="text-sm text-gray-700">
                  Se activa el sistema de gestión inteligente.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 2: Lo Importante */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              🎯 Paso 2: Lo Importante - La Optimización del Tiempo
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl mb-6">
                  Y para el tsunami de llamadas de alquiler... <strong>las convertimos en tiempo para ti.</strong>
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Cualifica con TUS criterios (ingresos, contrato, etc.)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Lista priorizada de candidatos ideales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Reduce las visitas a la mitad</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <p className="text-lg">Menos visitas inútiles</p>
                  <div className="text-2xl font-bold mt-4 text-yellow-300">+200% Eficiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
