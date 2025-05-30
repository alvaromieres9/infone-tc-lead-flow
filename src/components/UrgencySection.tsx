
import { useState, useEffect } from 'react';
import { AlertTriangle, Users, Clock } from 'lucide-react';

export const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Alert Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-red-200">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              ¡ACCIÓN REQUERIDA URGENTE!
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las Inscripciones Cierran En:
            </h2>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-gradient-to-b from-red-500 to-red-600 text-white rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs md:text-sm uppercase tracking-wide">Días</div>
              </div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs md:text-sm uppercase tracking-wide">Horas</div>
              </div>
              <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-white rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs md:text-sm uppercase tracking-wide">Min</div>
              </div>
              <div className="bg-gradient-to-b from-green-500 to-green-600 text-white rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs md:text-sm uppercase tracking-wide">Seg</div>
              </div>
            </div>
          </div>

          {/* Scarcity Indicator */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-600" />
                Estado de Plazas Disponibles
              </h3>
              <span className="text-red-600 font-semibold">¡Solo 2 Quedan!</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>0 plazas</span>
                <span className="font-semibold">3 de 5 ocupadas</span>
                <span>5 plazas máx</span>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Plaza 1: <strong>OCUPADA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Plaza 2: <strong>OCUPADA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Plaza 3: <strong>OCUPADA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Plaza 4: <strong>DISPONIBLE</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Plaza 5: <strong>DISPONIBLE</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-gray-400">No hay más plazas</span>
              </div>
            </div>
          </div>

          {/* Final Warning */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-lg border border-yellow-300">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">
                Después de esta fecha, la siguiente oportunidad será en 6+ meses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
