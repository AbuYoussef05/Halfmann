import ContactTeaser from '@/components/ContactTeaser';
import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function UeberUns() {
  const promise = [
    {
      icon: Target,
      title: 'Verlässlichkeit',
      description: 'Termine halten, sauber dokumentieren.'
    },
    {
      icon: Eye,
      title: 'Transparenz',
      description: 'Proaktive Updates und fester Ansprechpartner.'
    },
    {
      icon: Heart,
      title: 'Sorgfalt',
      description: 'Fahrzeugschutz, Foto-Dokumentation, klare Prozesse.'
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
            Ihr Partner für professionelle Fahrzeuglogistik
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-promise-title">
              Unser Versprechen
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {promise.map((item, index) => (
              <Card key={index} className="p-8 text-center hover-elevate transition-all" data-testid={`card-promise-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hlf-gradient mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-hlf-blue-900 mb-4" data-testid={`text-promise-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-hlf-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-6" data-testid="text-history-title">
                Halfmann Logistics – mit klarem Anspruch
              </h2>
              <div className="text-lg text-hlf-gray-600 leading-relaxed space-y-4 text-left">
                <p>
                  HALFMANN wurde gegründet, um Fahrzeuglogistik neu zu denken und vor allem einfacher, transparenter und verlässlicher zu machen. Wir stehen für direkte Kommunikation, klare Prozesse und saubere Übergaben, die den Arbeitsalltag von Händlern, OEMs, Vermietern und Leasingpartnern wirklich erleichtern.
                </p>
                <p>
                  Unsere Gründung basiert auf langjähriger Erfahrung in der Logistikbranche und dem Anspruch, ein Servicelevel zu bieten, das spürbar besser funktioniert. Bei uns gibt es keine unnötigen Wartezeiten, keine unklaren Zuständigkeiten und keine Informationslücken. Stattdessen setzen wir auf strukturierte Abläufe, digitale Transparenz, verbindliche Terminplanung und eine partnerschaftliche Zusammenarbeit auf Augenhöhe.
                </p>
                <p>
                  HALFMANN Logistics ist ein moderner Dienstleister, der versteht, wie komplex und zeitkritisch Fahrzeugbewegungen heute sind. Deshalb kombinieren wir professionelle Transportlogistik, effiziente Lagerkapazitäten und ein durchdachtes Flottenmanagement in einem klaren, leistungsfähigen System. Für unsere Partner bedeutet das: weniger Aufwand, mehr Kontrolle und ein zuverlässiger Prozess von Anfang bis Ende.
                </p>
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
