
export const TruthSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamos honestos: el piso se va a <span className="text-blue-700">alquilar igual.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            El verdadero problema no es el estrés de las 200 llamadas por un alquiler. Es el <strong className="text-red-600">coste de oportunidad devastador</strong> de que la llamada de ese propietario que quiere poner a la venta su piso de 500.000€ comunique, se canse y llame al siguiente. 
            <br className="hidden md:block" />
            <span className="font-semibold text-gray-800">Esa única llamada no es una molestia. Es tu próxima gran comisión.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
