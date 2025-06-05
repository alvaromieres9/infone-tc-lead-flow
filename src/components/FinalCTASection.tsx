
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Mail, Building, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const FinalCTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "¡Solicitud Enviada!",
        description: "Te contactaremos en las próximas 24 horas para confirmar tu acceso al piloto.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', agency: '', email: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta-form" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              ¿Listo para Proteger <br />
              <span className="text-blue-400">Tus Oportunidades?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Solicitar Acceso al Piloto
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-300">
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
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency" className="flex items-center gap-2 text-gray-300">
                    <Building className="w-4 h-4" />
                    Inmobiliaria *
                  </Label>
                  <Input
                    id="agency"
                    name="agency"
                    type="text"
                    value={formData.agency}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu inmobiliaria"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-300">
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
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando Solicitud...
                    </div>
                  ) : (
                    'ACCEDER AL PILOTO'
                  )}
                </Button>

                <div className="flex items-center gap-2 text-sm text-gray-400 pt-4 border-t border-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Datos protegidos según RGPD. Sin spam garantizado.</span>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-700 rounded-xl p-6">
                <h4 className="font-bold text-blue-300 mb-3 text-lg">⚡ Qué Ocurre Tras Tu Solicitud:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span><strong>24h:</strong> Confirmación y llamada de bienvenida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span><strong>48h:</strong> Configuración personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span><strong>72h:</strong> Sistema activo y funcionando</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-700 rounded-xl p-6 text-center">
                <p className="text-yellow-300 font-bold text-lg mb-2">
                  🚨 Solo 2 plazas disponibles
                </p>
                <p className="text-gray-300 text-sm">
                  La próxima oportunidad será en varios meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
