import Timeline from '@/components/Timeline';
import ContactTeaser from '@/components/ContactTeaser';
import { Card } from '@/components/ui/card';
import { Award, Target, Heart } from 'lucide-react';

export default function UeberUns() {
  const timeline = [
    {
      year: '1995',
      title: 'Gründung',
      description: 'Start als kleines Familienunternehmen mit 2 Fahrzeugen und großen Ambitionen'
    },
    {
      year: '2000',
      title: 'Erste Expansion',
      description: 'Aufbau eines regionalen Netzwerks und Erweiterung der Flotte auf 15 Fahrzeuge'
    },
    {
      year: '2005',
      title: 'Europaweite Präsenz',
      description: 'Ausbau zum europaweiten Netzwerk mit über 50 Partnern in 15 Ländern'
    },
    {
      year: '2010',
      title: 'ISO-Zertifizierung',
      description: 'Erhalt der ISO 9001 Zertifizierung für Qualitätsmanagement'
    },
    {
      year: '2015',
      title: 'Digitalisierung',
      description: 'Einführung modernster Tracking- und Management-Systeme für maximale Transparenz'
    },
    {
      year: '2020',
      title: 'Nachhaltigkeitsoffensive',
      description: 'Umstellung auf umweltfreundliche Flotte und CO2-neutrale Transporte'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Marktführer mit über 25.000 Transporten pro Jahr und 150+ Mitarbeitern'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Unsere Mission',
      description: 'Fahrzeuglogistik neu zu definieren – durch Innovation, Zuverlässigkeit und persönlichen Service, der Maßstäbe setzt.'
    },
    {
      icon: Heart,
      title: 'Unsere Werte',
      description: 'Vertrauen, Qualität und Kundenzufriedenheit stehen im Mittelpunkt unseres täglichen Handelns. Wir behandeln jedes Fahrzeug wie unser eigenes.'
    },
    {
      icon: Award,
      title: 'Unsere Auszeichnungen',
      description: 'ISO 9001 zertifiziert, mehrfacher Gewinner des "Logistik Excellence Award" und Partner führender Automobilhersteller.'
    }
  ];

  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-hlf-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-title">
            Über uns
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Seit über 25 Jahren Ihr verlässlicher Partner für professionelle Fahrzeuglogistik
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-elevate transition-all" data-testid={`card-value-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hlf-gradient mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-hlf-blue-900 mb-4" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-hlf-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-timeline-title">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Von der kleinen Spedition zum europäischen Marktführer
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Timeline events={timeline} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-hlf-blue-900 mb-2" data-testid="text-stat-employees">150+</div>
                <p className="text-hlf-gray-600">Mitarbeiter</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-hlf-blue-900 mb-2" data-testid="text-stat-transports">25.000+</div>
                <p className="text-hlf-gray-600">Transporte/Jahr</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-hlf-blue-900 mb-2" data-testid="text-stat-countries">15+</div>
                <p className="text-hlf-gray-600">Länder</p>
              </div>
            </div>
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
