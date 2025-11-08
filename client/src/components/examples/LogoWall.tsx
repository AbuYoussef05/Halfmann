import LogoWall from '../LogoWall';

export default function LogoWallExample() {
  const logos = [
    { name: 'BMW' },
    { name: 'Mercedes' },
    { name: 'VW' },
    { name: 'Audi' },
    { name: 'Porsche' },
    { name: 'Tesla' }
  ];

  return (
    <div className="p-8 bg-white">
      <LogoWall logos={logos} title="Unsere Partner" />
    </div>
  );
}
