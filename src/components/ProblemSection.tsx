
import { Phone, AlertTriangle, Clock } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            El Problema:{' '}
            <span className="text-infone-600">Demasiadas Llamadas</span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Publicas en Idealista → El teléfono no para → ¿Cuántas son realmente buenas?
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Volumen Agobiante</h3>
              <p className="text-gray-600 text-sm">
                Decenas de llamadas que interrumpen tu trabajo
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agentes Saturados</h3>
              <p className="text-gray-600 text-sm">
                Tiempo perdido filtrando en lugar de cerrar
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Leads Perdidos</h3>
              <p className="text-gray-600 text-sm">
                Clientes buenos se escapan por el ruido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
