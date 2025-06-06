
export const TruthSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title - matches first image */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Seamos honestos: el piso se va a <span className="text-blue-600">alquilar igual.</span>
          </h2>
          
          {/* Visual divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"></div>
          
          {/* Problem statement - matches second image */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              El verdadero problema no es el estrés de las 200 llamadas por un alquiler. Es el{' '}
              <span className="text-red-600 font-bold">coste de no atender</span>{' '}
              la llamada de ese propietario que quiere vender su piso de{' '}
              <span className="text-blue-700 font-bold text-2xl md:text-3xl">1.000.000€</span>
            </p>
          </div>
          
          {/* Visual emphasis with icons */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">📞</span>
              </div>
              <span className="font-medium">200 llamadas de ruido</span>
            </div>
            
            <div className="text-gray-400 text-2xl">VS</div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">💰</span>
              </div>
              <span className="font-medium">1 llamada de oro perdida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
