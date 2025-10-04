import FeatureCard from '../FeatureCard';
import { Truck, Shield, Clock } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <FeatureCard
        icon={Truck}
        title="Fahrzeugtransport"
        description="Professioneller Transport aller Fahrzeugtypen"
        features={['PKW & LKW', 'Oldtimer', 'Baumaschinen']}
      />
      <FeatureCard
        icon={Shield}
        title="Versicherungsschutz"
        description="Umfassender Schutz während des gesamten Transports"
        features={['Vollkasko', 'Ladungssicherung', 'Schadenmanagement']}
      />
      <FeatureCard
        icon={Clock}
        title="Termintreue"
        description="Garantierte pünktliche Lieferung"
        features={['Express-Option', 'Live-Tracking', '24/7 Support']}
      />
    </div>
  );
}
