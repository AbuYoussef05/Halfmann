import FeatureCard from '@/components/FeatureCard';
import ContactTeaser from '@/components/ContactTeaser';
import { Truck, Car, Plane, Ship, Warehouse, Building2 } from 'lucide-react';

export default function Leistungen() {
  const transportServices = [
    {
      icon: Car,
      title: 'PKW-Transport',
      description: 'Sichere und schonende Beförderung von Personenkraftwagen aller Marken und Modelle',
      features: ['Neu- und Gebrauchtwagen', 'Luxus- und Sportfahrzeuge', 'Deutschlandweit & Europa']
    },
    {
      icon: Truck,
      title: 'Transporter bis 7,5 t',
      description: 'Leichte Nutzfahrzeuge, Lieferwagen und Kleinbusse sicher ans Ziel',
      features: ['Lieferwagen & Kastenwagen', 'Kleinbusse', 'Leichte Nutzfahrzeuge']
    },
    {
      icon: Plane,
      title: 'Express-Service & Überführungen',
      description: 'Schneller Transport für eilige Aufträge sowie Einzel- und Flottenüberführungen',
      features: ['24-48h Express-Lieferung', 'Einzelfahrten & Sammeltransporte', 'Flottenüberführungen']
    }
  ];

  const storageServices = [
    {
      icon: Warehouse,
      title: 'Fahrzeuglagerung',
      description: 'Gesicherte Stellflächen im Fahrzeuglager Dortmund mit Ein-/Ausgangskontrolle',
      features: ['Kurz- bis mittelfristige Lagerung', 'Gesichertes Gelände', 'Direkte Anbindung an den HBF Dortmund']
    },
    {
      icon: Building2,
      title: 'Dokumentation',
      description: 'Professionelle Ein- und Ausgangskontrolle mit vollständiger Fahrzeugdokumentation',
      features: ['Digitale Foto-Dokumentation & Zugang', 'Zustandsberichte und Schadensdokumentation', 'Lückenlose Nachverfolgung']
    },
    {
      icon: Ship,
      title: 'Flottenlagerung',
      description: 'Großvolumige Stellflächen für Händler und Fuhrparks',
      features: ['Großvolumige Stellflächen', 'Bestandsverwaltung für Händler', 'Flexible Zugriffszeiten']
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-storage-title">
              Fahrzeuglagerung
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Sichere Lagerflächen für jede Anforderung
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storageServices.map((service) => (
              <div 
                key={service.title} 
                className="bg-gradient-to-br from-hlf-gray-100 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-hlf-gray-200"
                data-testid={`card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-hlf-blue-700 to-hlf-blue-900 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-hlf-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-hlf-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-hlf-gray-600">
                      <span className="text-hlf-blue-700 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-hlf-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hlf-blue-900 mb-4" data-testid="text-transport-title">
              Fahrzeugtransport
            </h2>
            <p className="text-lg text-hlf-gray-600">
              Sichere und termingerechte Transporte für alle Fahrzeugtypen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportServices.map((service) => (
              <div 
                key={service.title} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-hlf-gray-200"
                data-testid={`card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-hlf-blue-700 to-hlf-blue-900 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-hlf-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-hlf-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-hlf-gray-600">
                      <span className="text-hlf-blue-700 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
