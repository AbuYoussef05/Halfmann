import Timeline from '../Timeline';

export default function TimelineExample() {
  const events = [
    {
      year: '1995',
      title: 'Gründung',
      description: 'Start als kleines Familienunternehmen mit 2 Fahrzeugen'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Ausbau zum europaweiten Netzwerk mit 50+ Partnern'
    },
    {
      year: '2015',
      title: 'Digitalisierung',
      description: 'Einführung modernster Tracking- und Management-Systeme'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Marktführer mit über 25.000 Transporten pro Jahr'
    }
  ];

  return (
    <div className="p-8 max-w-3xl">
      <Timeline events={events} />
    </div>
  );
}
