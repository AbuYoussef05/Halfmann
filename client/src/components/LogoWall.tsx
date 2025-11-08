interface Logo {
  name: string;
  url?: string;
}

interface LogoWallProps {
  logos: Logo[];
  title?: string;
}

export default function LogoWall({ logos, title }: LogoWallProps) {
  return (
    <div>
      {title && (
        <h2 className="text-3xl font-bold text-center text-hlf-blue-900 mb-12" data-testid="text-logowall-title">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            data-testid={`logo-${index}`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-hlf-gray-600">
                {logo.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
