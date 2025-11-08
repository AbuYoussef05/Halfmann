import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoUrl from '@assets/halfmann-logistics-logo.svg';

const navItems = [
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'Kontakt', path: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-4" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-hlf-blue-500 rounded-md" data-testid="link-home">
            <img src={logoUrl} alt="HALFMANN Logistics - Professionelle Fahrzeuglogistik" className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-base font-medium transition-colors hover:text-hlf-blue-700 focus:outline-none focus:ring-2 focus:ring-hlf-blue-500 rounded-sm px-1 py-1 ${
                  location === item.path ? 'text-hlf-blue-900' : 'text-hlf-gray-900'
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
                {location === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hlf-blue-500" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild data-testid="button-call-desktop">
              <a href="tel:+4923118983985">Jetzt anrufen</a>
            </Button>
            <Button className="bg-hlf-gradient text-white" asChild data-testid="button-quote-desktop">
              <Link href="/kontakt">Angebot anfordern</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-md text-base font-medium transition-colors hover-elevate ${
                    location === item.path ? 'bg-hlf-blue-100 text-hlf-blue-900' : 'text-hlf-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
