import Steps from '../Steps';
import { MessageSquare, FileCheck, Truck, CheckCircle } from 'lucide-react';

export default function StepsExample() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Anfrage',
      description: 'Kontaktieren Sie uns für ein unverbindliches Angebot'
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'Planung',
      description: 'Wir erstellen einen maßgeschneiderten Transportplan'
    },
    {
      number: 3,
      icon: Truck,
      title: 'Transport',
      description: 'Sichere und termingerechte Durchführung'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Übergabe',
      description: 'Professionelle Übergabe mit Dokumentation'
    }
  ];

  return (
    <div className="p-8 bg-hlf-gray-100">
      <Steps steps={steps} />
    </div>
  );
}
