import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Steps from '@/components/Steps';
import ContactTeaser from '@/components/ContactTeaser';
import { Truck, Shield, Clock, Users, Globe, FileText, MessageSquare, FileCheck, CheckCircle, Eye, Zap, Lock } from 'lucide-react';
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

  const strengths = [
    {
      icon: Users,
      title: 'Engagiertes Team',
      description: 'Dynamische Spezialisten mit Leidenschaft für Fahrzeuglogistik und höchste Servicequalität.'
    },
    {
      icon: Eye,
      title: 'Transparente Abwicklung',
      description: 'Fester Ansprechpartner, proaktive Status-Updates, dokumentierte Übergaben.'
    },
    {
      icon: Zap,
      title: 'Flexible Lösungen',
      description: 'Einzel- bis Flottenbewegungen, Termin- oder Expressfahrten nach Bedarf.'
    },
    {
      icon: Lock,
      title: 'Sicher & zuverlässig',
      description: 'Gesicherte Transporte, Check-in/Check-out-Protokolle mit Fotos.'
    }
  ];

  const whyUs = [
    {
      icon: Users,
      title: 'Engagiertes Team',
      description: 'Jung, flexibel und serviceorientiert – wir kümmern uns zuverlässig um jeden Transportauftrag.'
    },
    {
      icon: Globe,
      title: 'Europaweites Netzwerk',
      description: 'Flächendeckendes Partnernetzwerk für nahtlose Transporte in Deutschland und angrenzenden Ländern'
    },
    {
      icon: FileText,
      title: 'OEM-konforme Prozesse',
      description: 'Klare Abläufe von Abholung bis Zustellung – mit Übergabeprotokoll, Foto-Dokumentation und fester Kommunikation.'
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

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-strengths-title">
              Unsere Stärken
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Was uns auszeichnet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-why-title">
              Warum HALFMANN?
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Ihre Vorteile bei der Zusammenarbeit mit uns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <FeatureCard key={item.title} {...item} />
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
