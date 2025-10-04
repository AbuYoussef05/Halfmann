import ContactTeaser from '@/components/ContactTeaser';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase } from 'lucide-react';

export default function Jobs() {
  const jobs = [
    {
      title: 'Berufskraftfahrer (m/w/d)',
      location: 'Musterstadt',
      type: 'Vollzeit',
      description: 'Wir suchen erfahrene Berufskraftfahrer für den nationalen und internationalen Fahrzeugtransport.',
      requirements: ['Führerschein CE', 'Berufserfahrung im Fahrzeugtransport', 'Zuverlässigkeit und Pünktlichkeit']
    },
    {
      title: 'Disponent Fahrzeuglogistik (m/w/d)',
      location: 'Musterstadt',
      type: 'Vollzeit',
      description: 'Zur Verstärkung unseres Teams suchen wir einen erfahrenen Disponenten für unsere Fahrzeuglogistik.',
      requirements: ['Erfahrung in der Disposition', 'Organisationstalent', 'Gute EDV-Kenntnisse']
    },
    {
      title: 'Kaufmännischer Mitarbeiter (m/w/d)',
      location: 'Musterstadt',
      type: 'Vollzeit',
      description: 'Unterstützen Sie unser Team in der kaufmännischen Abwicklung unserer Transportaufträge.',
      requirements: ['Kaufmännische Ausbildung', 'Kommunikationsstärke', 'MS Office Kenntnisse']
    },
    {
      title: 'Auszubildender Berufskraftfahrer (m/w/d)',
      location: 'Musterstadt',
      type: 'Ausbildung',
      description: 'Starte deine Karriere bei uns mit einer fundierten Ausbildung zum Berufskraftfahrer.',
      requirements: ['Führerschein B', 'Motivation und Lernbereitschaft', 'Mindestalter 18 Jahre']
    }
  ];

  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-hlf-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-title">
            Karriere bei HALFMANN
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Werden Sie Teil unseres erfolgreichen Teams und gestalten Sie die Zukunft der Fahrzeuglogistik mit
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-benefits-title">
              Ihre Vorteile bei uns
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-hlf-blue-900 mb-2">Faire Bezahlung</h3>
              <p className="text-sm text-hlf-gray-600">Attraktive Vergütung und zusätzliche Leistungen</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-hlf-blue-900 mb-2">Moderne Ausstattung</h3>
              <p className="text-sm text-hlf-gray-600">Neueste Fahrzeuge und modernste Technik</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-hlf-blue-900 mb-2">Weiterentwicklung</h3>
              <p className="text-sm text-hlf-gray-600">Regelmäßige Schulungen und Aufstiegschancen</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hlf-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-openings-title">
              Aktuelle Stellenangebote
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-job-${index}`}>
                <h3 className="text-2xl font-bold text-hlf-blue-900 mb-4" data-testid={`text-job-title-${index}`}>
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-hlf-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="text-hlf-gray-600 mb-4">
                  {job.description}
                </p>
                <div className="mb-6">
                  <p className="font-semibold text-hlf-blue-900 mb-2">Anforderungen:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-hlf-gray-600 flex items-start gap-2">
                        <span className="text-hlf-blue-500">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-hlf-gradient text-white w-full" data-testid={`button-apply-${index}`}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  Jetzt bewerben
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-6" data-testid="text-initiative-title">
              Initiativbewerbung
            </h2>
            <p className="text-lg text-hlf-gray-600 mb-8">
              Sie haben Ihre Traumstelle nicht gefunden? Senden Sie uns gerne eine Initiativbewerbung!
            </p>
            <Button size="lg" className="bg-hlf-gradient text-white" data-testid="button-initiative">
              <Briefcase className="mr-2 h-5 w-5" />
              Initiativ bewerben
            </Button>
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
