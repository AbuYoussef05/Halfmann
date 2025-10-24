import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Steps from '@/components/Steps';
import ContactTeaser from '@/components/ContactTeaser';
import { Truck, Shield, Clock, Users, MessageSquare, FileCheck, CheckCircle, Eye, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: 'Fahrzeugtransport',
      description: 'PKW, SUV und leichte Nutzfahrzeuge/Transporter bis 7,5 t',
      features: ['Neu- und Gebrauchtwagen', 'Einzel- und Flottentransporte', 'Deutschlandweit & angrenzende Länder']
    },
    {
      icon: Shield,
      title: 'Versicherungsschutz',
      description: 'Umfassender Schutz während des gesamten Transports',
      features: ['Vollkaskoversicherung', 'Professionelle Ladungssicherung', 'Schnelles Schadenmanagement']
    },
    {
      icon: Clock,
      title: 'Termintreue',
      description: 'Garantierte pünktliche Lieferung zu Ihrem Wunschtermin',
      features: ['Express-Option verfügbar', 'Live-Tracking in Echtzeit', 'Fester Ansprechpartner']
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Engagiertes Team',
      description: 'Wir sind jung, serviceorientiert und mit voller Leidenschaft dabei. Bei uns kümmert sich ein fester Ansprechpartner um Ihre Transporte – von Anfang bis Ende.'
    },
    {
      icon: Eye,
      title: 'Transparente Kommunikation',
      description: 'Keine versteckten Kosten, keine Überraschungen. Sie wissen immer, wo Ihr Fahrzeug steht und wann es ankommt. Ehrlich und direkt.'
    },
    {
      icon: Zap,
      title: 'Flexible Lösungen',
      description: 'Standard- oder Express-Transport? Einzelfahrzeug oder ganze Flotte? Wir passen uns Ihrem Bedarf an – nicht umgekehrt.'
    },
    {
      icon: Shield,
      title: 'Sicherheit & Vertrauen',
      description: 'Wir behandeln jedes Fahrzeug, als wäre es unser eigenes. Mit Check-in/Check-out-Protokollen, Foto-Dokumentation und vollständiger Versicherung.'
    }
  ];

  const processSteps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Anfrage stellen',
      description: 'Kontaktieren Sie uns telefonisch oder per E-Mail für ein unverbindliches Angebot'
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'Transportplanung',
      description: 'Wir erstellen einen maßgeschneiderten Transportplan für Ihre Anforderungen'
    },
    {
      number: 3,
      icon: Truck,
      title: 'Durchführung',
      description: 'Sichere und termingerechte Durchführung mit Live-Tracking'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Übergabe',
      description: 'Professionelle Übergabe mit vollständiger Dokumentation'
    }
  ];


  const faqs = [
    {
      question: 'Welche Fahrzeugtypen transportiert ihr?',
      answer: 'PKW, SUV und leichte Nutzfahrzeuge/Transporter bis 7,5 t.'
    },
    {
      question: 'Wie schnell erhalte ich ein Angebot?',
      answer: 'In der Regel am gleichen Werktag, spätestens innerhalb von 24 Stunden.'
    },
    {
      question: 'Einzel- oder Sammeltransporte?',
      answer: 'Beides. Wir bündeln sinnvoll oder fahren dediziert – je nach Termin und Volumen.'
    },
    {
      question: 'Wie laufen Abholung und Übergabe ab?',
      answer: 'Check-in/Check-out mit Protokoll und Foto-Dokumentation, auf Wunsch mit Zustandsbericht.'
    },
    {
      question: 'Gibt es Lager- oder Standflächen?',
      answer: 'Ja. Fahrzeuglager/Compound Dortmund für kurz- bis mittelfristige Zwischenlagerung.'
    }
  ];

  return (
    <main id="main-content">
      <Hero />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-services-title">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Professionelle Fahrzeuglogistik für alle Anforderungen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-hlf-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-why-title">
              Warum HALFMANN Logistics?
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Wir sind mehr als ein Logistikanbieter – wir sind Ihr verlässlicher Partner für jeden Transport.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div 
                key={item.title} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-hlf-gray-200"
                data-testid={`card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-hlf-blue-700 to-hlf-blue-900 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-hlf-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-hlf-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-process-title">
              So funktioniert's
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Ihr Weg zum sicheren Fahrzeugtransport in 4 einfachen Schritten
            </p>
          </div>
          <Steps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-faq-title">
              Häufig gestellte Fragen
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold text-hlf-blue-900 hover:text-hlf-blue-700" data-testid={`accordion-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-hlf-gray-600" data-testid={`accordion-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <ContactTeaser />
        </div>
      </section>
    </main>
  );
}
