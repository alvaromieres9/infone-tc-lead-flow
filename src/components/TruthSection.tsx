
import { TrendingDown, Euro } from 'lucide-react';

export const TruthSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Seamos honestos: <span className="text-yellow-400">el piso se va a alquilar igual.</span>
          </h2>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                  El verdadero problema no es el estrés de las 200 llamadas por un alquiler. 
                  Es el <strong className="text-red-400">coste de oportunidad devastador</strong> de que la llamada de ese propietario 
                  que quiere poner a la venta su piso de 500.000€ comunique, se canse y llame al siguiente de la lista.
                </p>
                
                <div className="mt-6 p-4 bg-red-900/50 rounded-lg border border-red-700">
                  <p className="text-xl font-bold text-red-300">
                    Esa única llamada perdida no es una molestia, es la comisión de un año.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-b from-red-500 to-red-600 rounded-2xl p-6">
                  <TrendingDown className="w-16 h-16 mx-auto mb-4 text-white" />
                  <div className="text-3xl font-bold mb-2">-15.000€</div>
                  <p className="text-sm opacity-90">Coste por oportunidad perdida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
