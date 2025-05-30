
import { Phone, AlertTriangle, Clock } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Esa Avalancha de Llamadas Post-Idealista...{' '}
            <span className="text-infone-600">Te Entendemos</span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Publicas un anuncio en Idealista y tu teléfono no para de sonar. Pero entre tanto ruido,
            ¿cuántas son realmente oportunidades de calidad?
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Volumen Agobiante</h3>
              <p className="text-gray-600 text-sm">
                Decenas de llamadas diarias que interrumpen el trabajo productivo
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Estrés del Equipo</h3>
              <p className="text-gray-600 text-sm">
                Agentes saturados filtrando llamadas en lugar de cerrar ventas
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Oportunidades Perdidas</h3>
              <p className="text-gray-600 text-sm">
                Leads de calidad se escapan mientras atiendes consultas irrelevantes
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-infone-50 rounded-xl border border-infone-200">
            <p className="text-infone-800 font-medium">
              💡 <strong>La realidad:</strong> No es la demanda el problema, es la ineficiencia en gestionarla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
