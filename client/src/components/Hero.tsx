import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/generated_images/Vehicle_logistics_hero_image_e0151115.png';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-hlf-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hlf-blue-900/95 via-hlf-blue-900/80 to-hlf-blue-900/60 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Ihr Fahrzeug in besten Händen.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
            Sichere Fahrzeuglogistik – termingenau, transparent, europaweit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-hlf-blue-900 hover:bg-white/90 font-semibold text-lg px-8"
              asChild
              data-testid="button-hero-quote"
            >
              <Link href="/kontakt">Angebot anfordern</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8"
              asChild
              data-testid="button-hero-call"
            >
              <a href="tel:+49XXXXXXXXX">Jetzt anrufen</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white mb-1" data-testid="text-stat-1">&gt; 25.000</div>
              <div className="text-sm text-white/80">Transporte/Jahr</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white mb-1" data-testid="text-stat-2">Europaweit</div>
              <div className="text-sm text-white/80">Netzwerk</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white mb-1" data-testid="text-stat-3">Zertifiziert</div>
              <div className="text-sm text-white/80">Prozesse</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white mb-1" data-testid="text-stat-4">Persönlich</div>
              <div className="text-sm text-white/80">Ansprechpartner</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
}
