import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function ContactTeaser() {
  return (
    <Card className="p-8 bg-hlf-gradient text-white border-0" data-testid="card-contact-teaser">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-teaser-title">
          Ihr Partner für Fahrzeuglogistik
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Kontaktieren Sie uns für ein individuelles Angebot
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-hlf-blue-900 hover:bg-white/90 font-semibold"
            asChild
            data-testid="button-contact-quote"
          >
            <Link href="/kontakt">
              <Mail className="mr-2 h-5 w-5" />
              Angebot anfordern
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
            asChild
            data-testid="button-contact-call"
          >
            <a href="tel:+49XXXXXXXXX">
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
