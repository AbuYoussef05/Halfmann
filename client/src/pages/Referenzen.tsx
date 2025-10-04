import LogoWall from '@/components/LogoWall';
import Testimonial from '@/components/Testimonial';
import ContactTeaser from '@/components/ContactTeaser';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function Referenzen() {
  const logos = [
    { name: 'BMW' },
    { name: 'Mercedes' },
    { name: 'VW' },
    { name: 'Audi' },
    { name: 'Porsche' },
    { name: 'Tesla' },
    { name: 'Opel' },
    { name: 'Ford' },
    { name: 'Renault' },
    { name: 'Peugeot' },
    { name: 'Skoda' },
    { name: 'Seat' }
  ];

  const testimonials = [
    {
      quote: 'Seit über 5 Jahren arbeiten wir mit HALFMANN zusammen. Die Zuverlässigkeit und Professionalität ist beispielhaft.',
      author: 'Michael Schmidt',
      company: 'Autohaus Schmidt GmbH',
      role: 'Geschäftsführer'
    },
    {
      quote: 'Besonders beeindruckt hat uns die transparente Kommunikation und das Live-Tracking. So wissen wir immer, wo unsere Fahrzeuge sind.',
      author: 'Sarah Weber',
      company: 'Weber Automobil AG',
      role: 'Logistikleiterin'
    },
    {
      quote: 'HALFMANN hat uns bei einem komplexen Sondertransport perfekt unterstützt. Kompetent, flexibel und lösungsorientiert.',
      author: 'Thomas Müller',
      company: 'Müller Fahrzeughandel',
      role: 'Inhaber'
    },
    {
      quote: 'Die Qualität der Leistung stimmt zu 100%. Wir können HALFMANN uneingeschränkt weiterempfehlen.',
      author: 'Andrea Klein',
      company: 'Klein Automobile GmbH',
      role: 'Geschäftsführerin'
    }
  ];

  const cases = [
    {
      title: 'Oldtimer-Transport nach Italien',
      client: 'Premium Classics GmbH',
      challenge: 'Transport eines seltenen Ferrari 250 GTO von München nach Rom',
      solution: 'Geschlossener, klimatisierter Spezialtransporter mit Vollkaskoversicherung und persönlicher Begleitung',
      result: 'Pünktliche und schadensfreie Lieferung, Kunde hochzufrieden'
    },
    {
      title: 'Flottenüberführung',
      client: 'Business Fleet Solutions',
      challenge: 'Überführung von 50 Neufahrzeugen von verschiedenen Standorten',
      solution: 'Koordinierte Multi-Standort-Abholung mit präzisem Zeitplan',
      result: 'Alle Fahrzeuge termingerecht ausgeliefert, Flottenstart wie geplant'
    },
    {
      title: 'Express-Transport',
      client: 'Sportwagen Zentrum',
      challenge: 'Dringender Transport eines Porsche 911 GT3 RS für Veranstaltung',
      solution: '24-Stunden Express-Service mit Direkttransport',
      result: 'Rechtzeitige Ankunft, Fahrzeug präsentationsbereit'
    }
  ];

  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-hlf-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-title">
            Referenzen
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Vertrauen Sie auf unsere Erfahrung – Diese Unternehmen setzen bereits auf HALFMANN Logistics
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <LogoWall logos={logos} title="Unsere Partner" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-cases-title">
              Erfolgreiche Projekte
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Beispiele unserer erfolgreichen Transportprojekte
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-case-${index}`}>
                <h3 className="text-xl font-bold text-hlf-blue-900 mb-3" data-testid={`text-case-title-${index}`}>
                  {caseItem.title}
                </h3>
                <p className="text-sm text-hlf-gray-600 mb-4 font-medium">
                  Kunde: {caseItem.client}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-hlf-blue-700 mb-1">Herausforderung:</p>
                    <p className="text-sm text-hlf-gray-600">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hlf-blue-700 mb-1">Lösung:</p>
                    <p className="text-sm text-hlf-gray-600">{caseItem.solution}</p>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-hlf-blue-700 mb-1">Ergebnis:</p>
                      <p className="text-sm text-hlf-gray-600">{caseItem.result}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-testimonials-title">
              Kundenstimmen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
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
