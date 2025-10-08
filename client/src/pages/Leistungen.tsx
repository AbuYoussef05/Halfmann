import FeatureCard from '@/components/FeatureCard';
import ContactTeaser from '@/components/ContactTeaser';
import { Truck, Car, Plane, Ship, Warehouse, Key } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Leistungen() {
  const services = [
    {
      icon: Car,
      title: 'PKW-Transport',
      description: 'Sichere und schonende Beförderung von Personenkraftwagen aller Marken und Modelle',
      features: ['Neu- und Gebrauchtwagen', 'Luxus- und Sportfahrzeuge', 'Geschlossener Transport verfügbar']
    },
    {
      icon: Key,
      title: 'Oldtimer & Klassiker',
      description: 'Besonders schonender Transport für historische und wertvolle Fahrzeuge',
      features: ['Klimatisierter Transport', 'Spezielle Ladungssicherung', 'Vollkaskoschutz']
    },
    {
      icon: Truck,
      title: 'Transporter bis 7,5 t',
      description: 'PKW, SUV und leichte Nutzfahrzeuge/Transporter bis 7,5 t',
      features: ['Lieferwagen & Kastenwagen', 'Kleinbusse', 'Deutschlandweit & angrenzende Länder']
    },
    {
      icon: Warehouse,
      title: 'Fahrzeuglagerung',
      description: 'Gesicherte Stellflächen im Compound Dortmund inkl. Ein-/Ausgangskontrolle, Foto-Dokumentation und kurzfristiger Verfügbarkeit',
      features: ['Kurz- bis mittelfristige Lagerung', 'Gesichertes Gelände', 'Check-in/Check-out Protokolle']
    },
    {
      icon: Plane,
      title: 'Express-Service',
      description: 'Schnellster Transport für dringende Lieferungen',
      features: ['24-48h Lieferung', 'Prioritätsbehandlung', 'Direkttransport ohne Umwege']
    },
    {
      icon: Ship,
      title: 'Überführungen & Flotten',
      description: 'Einzel- bis Flottenbewegungen nach Bedarf',
      features: ['Einzelfahrten', 'Sammeltransporte', 'Flottenüberführungen']
    }
  ];

  const faqs = [
    {
      question: 'Wie wird mein Fahrzeug während des Transports geschützt?',
      answer: 'Alle Fahrzeuge werden professionell mit geprüften Spanngurten gesichert. Bei wertvollen Fahrzeugen bieten wir geschlossene Transporter mit zusätzlichem Schutz an.'
    },
    {
      question: 'Bieten Sie auch internationale Transporte an?',
      answer: 'Ja, wir transportieren Fahrzeuge deutschlandweit sowie in angrenzende Nachbarländer nach Absprache.'
    },
    {
      question: 'Was kostet die Fahrzeuglagerung?',
      answer: 'Die Kosten für die Lagerung im Compound Dortmund richten sich nach Dauer und Fahrzeugtyp. Kontaktieren Sie uns für ein individuelles Angebot.'
    }
  ];

  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-hlf-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-title">
            Unsere Leistungen
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Professionelle Fahrzeuglogistik für Händler, OEMs und Leasingunternehmen
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-faq-title">
              Häufige Fragen zu unseren Leistungen
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
