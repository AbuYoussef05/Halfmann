import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'wouter';

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg" data-testid="mobile-bottom-bar">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Button 
          className="bg-hlf-blue-500 hover:bg-hlf-blue-700 text-white font-semibold"
          asChild
          data-testid="button-mobile-call"
        >
          <a href="tel:+49XXXXXXXXX">
            <Phone className="mr-2 h-5 w-5" />
            Anrufen
          </a>
        </Button>
        <Button 
          className="bg-hlf-gradient text-white font-semibold"
          asChild
          data-testid="button-mobile-quote"
        >
          <Link href="/kontakt">
            <FileText className="mr-2 h-5 w-5" />
            Angebot
          </Link>
        </Button>
      </div>
    </div>
  );
}
