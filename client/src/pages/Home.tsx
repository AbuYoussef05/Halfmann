import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Steps from '@/components/Steps';
import LogoWall from '@/components/LogoWall';
import Testimonial from '@/components/Testimonial';
import ContactTeaser from '@/components/ContactTeaser';
import { Truck, Shield, Clock, Users, Globe, Award, MessageSquare, FileCheck, CheckCircle } from 'lucide-react';
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
      description: 'Professioneller Transport aller Fahrzeugtypen mit modernster Ausrüstung',
      features: ['PKW & LKW', 'Oldtimer & Spezialfahrzeuge', 'Baumaschinen']
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
      features: ['Express-Option verfügbar', 'Live-Tracking in Echtzeit', '24/7 Kundensupport']
    }
  ];

  const whyUs = [
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Über 25 Jahre Erfahrung in der Fahrzeuglogistik mit hochqualifizierten Mitarbeitern'
    },
    {
      icon: Globe,
      title: 'Europaweites Netzwerk',
      description: 'Flächendeckendes Partnernetzwerk für nahtlose Transporte in ganz Europa'
    },
    {
      icon: Award,
      title: 'Zertifizierte Qualität',
      description: 'ISO-zertifizierte Prozesse und regelmäßige Qualitätskontrollen'
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

  const logos = [
    { name: 'BMW' },
    { name: 'Mercedes' },
    { name: 'VW' },
    { name: 'Audi' },
    { name: 'Porsche' },
    { name: 'Tesla' }
  ];

  const testimonials = [
    {
      quote: 'Zuverlässiger Partner für unsere Fahrzeuglogistik. Immer pünktlich und professionell. Die Zusammenarbeit funktioniert reibungslos.',
      author: 'Michael Schmidt',
      company: 'Autohaus Schmidt GmbH',
      role: 'Geschäftsführer'
    },
    {
      quote: 'Exzellenter Service und transparente Kommunikation. Das Live-Tracking gibt uns die Sicherheit, die wir brauchen.',
      author: 'Sarah Weber',
      company: 'Weber Automobil AG',
      role: 'Logistikleiterin'
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell erhalte ich ein Angebot?',
      answer: 'In der Regel erhalten Sie innerhalb von 24 Stunden ein detailliertes Angebot. Bei dringenden Anfragen melden wir uns auch deutlich schneller bei Ihnen.'
    },
    {
      question: 'Welche Fahrzeugtypen transportiert ihr?',
      answer: 'Wir transportieren alle gängigen Fahrzeugtypen: PKW, LKW, Transporter, Oldtimer, Motorräder, Baumaschinen und Spezialfahrzeuge. Sprechen Sie uns einfach an!'
    },
    {
      question: 'Wie läuft die Übergabe ab?',
      answer: 'Bei der Übergabe erfolgt eine genaue Fahrzeuginspektion. Eventuelle Schäden werden protokolliert. Sie erhalten alle Dokumente und können das Fahrzeug sofort übernehmen.'
    },
    {
      question: 'Ist eine Versicherung im Preis enthalten?',
      answer: 'Ja, eine Transportversicherung ist standardmäßig in unseren Preisen enthalten. Auf Wunsch können Sie den Versicherungsschutz auch erweitern.'
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <LogoWall logos={logos} title="Unsere Partner vertrauen uns" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-testimonials-title">
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ContactTeaser />
        </div>
      </section>
    </main>
  );
}
