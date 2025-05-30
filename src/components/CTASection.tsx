
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Shield, Mail, Building, User, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Solicitud Enviada Exitosamente!",
        description: "Te contactaremos en las próximas 24 horas para confirmar tu plaza en el piloto.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', agency: '', email: '', phone: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¡No Te Quedes Fuera!{' '}
              <span className="bg-gradient-to-r from-infone-600 to-purple-600 bg-clip-text text-transparent">
                Asegura Tu Plaza VIP
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y únete a las inmobiliarias pioneras que están 
              revolucionando su gestión de leads con IA.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4" />
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre y apellidos"
                    required
                    className="bg-gray-50 border-gray-300 focus:border-infone-500 focus:ring-infone-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency" className="flex items-center gap-2 text-gray-700">
                    <Building className="w-4 h-4" />
                    Nombre de la Inmobiliaria *
                  </Label>
                  <Input
                    id="agency"
                    name="agency"
                    type="text"
                    value={formData.agency}
                    onChange={handleInputChange}
                    placeholder="Ej: Inmobiliaria López Madrid"
                    required
                    className="bg-gray-50 border-gray-300 focus:border-infone-500 focus:ring-infone-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    Email Profesional *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@tuinmobiliaria.com"
                    required
                    className="bg-gray-50 border-gray-300 focus:border-infone-500 focus:ring-infone-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    Teléfono (Opcional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+34 600 000 000"
                    className="bg-gray-50 border-gray-300 focus:border-infone-500 focus:ring-infone-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-infone-600 to-purple-600 hover:from-infone-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando Solicitud...
                    </div>
                  ) : (
                    '¡RESERVAR MI PLAZA AHORA!'
                  )}
                </Button>

                <div className="flex items-center gap-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>
                    100% Seguro. No spam. Protegemos tu privacidad según RGPD.
                  </span>
                </div>
              </form>
            </div>

            {/* Benefits Recap */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué Conseguirás al Apuntarte?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Acceso Prioritario Confirmado</h4>
                    <p className="text-gray-600 text-sm">
                      Te contactamos en menos de 24h para confirmar tu plaza y programar implementación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Configuración 100% Personalizada</h4>
                    <p className="text-gray-600 text-sm">
                      Adaptamos el IA exactamente a tu tipo de propiedades y criterios de cliente ideal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Uso Gratuito Durante Todo el Piloto</h4>
                    <p className="text-gray-600 text-sm">
                      Sin costes ocultos. Uso completo + soporte premium durante las 8-12 semanas del piloto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tu Voz Diseña el Producto</h4>
                    <p className="text-gray-600 text-sm">
                      Feedback directo con nuestro equipo técnico. Tus necesidades moldean la herramienta final.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 mt-8">
                <h4 className="font-bold mb-3">⚡ Acción Inmediata Tras Tu Registro:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Confirmación automática por email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Llamada de bienvenida en 24h</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Sesión de configuración personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Inicio inmediato del piloto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
            <p className="text-red-700 font-semibold text-lg mb-2">
              🚨 Recordatorio: Solo quedan 2 plazas de 5 disponibles
            </p>
            <p className="text-gray-600">
              La próxima oportunidad será en 6+ meses. ¿Te arriesgas a seguir perdiendo leads de calidad?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
