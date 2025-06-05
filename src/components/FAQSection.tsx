
import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => (
  <div className="border-b border-gray-200 py-4">
    <dt className="text-lg">
      <button 
        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
        onClick={onToggle}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 ml-2 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 ml-2 text-gray-400" />
        )}
      </button>
    </dt>
    {isOpen && (
      <dd className="mt-2 text-gray-600 animate-fade-in">
        {answer}
      </dd>
    )}
  </div>
);

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿El piloto es realmente 100% gratuito?",
      answer: "Sí. Completamente gratuito, sin costes ocultos ni necesidad de tarjeta. A cambio, solo pedimos tu colaboración y feedback activo para perfeccionar la herramienta."
    },
    {
      question: "¿Qué se espera de mi agencia durante el piloto?",
      answer: "Que utilices el Asistente IA en tu día a día y nos compartas tu experiencia y opiniones en breves reuniones de seguimiento. Queremos tu visión para construir la mejor solución."
    },
    {
      question: "¿La implementación es complicada o requiere mucho tiempo?",
      answer: "No. Nos encargamos de la configuración inicial, que es muy rápida y sencilla. El objetivo es que puedas empezar a ver resultados y a darnos feedback lo antes posible."
    },
    {
      question: "¿Qué pasa después del programa piloto?",
      answer: "Los participantes del piloto que colaboren activamente tendrán acceso preferente y condiciones especiales si deciden continuar usando la versión comercial del asistente. ¡Vuestra contribución será recompensada!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <HelpCircle className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Resolvemos tus <span className="text-blue-700">Dudas</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onToggle={() => setOpenItem(openItem === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
