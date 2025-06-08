
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send, User, Building, Mail } from 'lucide-react';
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

  try {
    const response = await fetch('https://infone.es/inmo/send-email.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "¡Solicitud Enviada!",
        description: "Te contactaremos en las próximas 24 horas para confirmar tu acceso al piloto.",
      });
      setFormData({ name: '', agency: '', email: '' });
    } else {
      toast({
        title: "Error al enviar",
        description: "Ocurrió un problema al enviar el formulario. Intenta nuevamente.",
      });
    }
  } catch (error) {
    toast({
      title: "Error de conexión",
      description: "No se pudo conectar con el servidor. Verifica tu conexión o intenta más tarde.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-100 via-white to-blue-50" id="cta-form">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <Send className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu Decisión: Seguir en el Caos o <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Liderar el Cambio.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            No dejes pasar esta oportunidad única. Las plazas son extremadamente limitadas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 text-left mb-2">
                <User className="w-4 h-4" />
                Nombre Completo
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu Nombre"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <Label htmlFor="agency" className="flex items-center gap-2 text-gray-700 text-left mb-2">
                <Building className="w-4 h-4" />
                Nombre de la Inmobiliaria
              </Label>
              <Input
                id="agency"
                name="agency"
                type="text"
                value={formData.agency}
                onChange={handleInputChange}
                placeholder="Nombre de tu Agencia"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 text-left mb-2">
                <Mail className="w-4 h-4" />
                Email de Contacto
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando Solicitud...
                </div>
              ) : (
                'Solicitar Mi Plaza en el Piloto'
              )}
            </Button>
            
            <p className="text-gray-500 text-xs mt-3">
              Nos pondremos en contacto contigo a la brevedad. Tu información está segura.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
