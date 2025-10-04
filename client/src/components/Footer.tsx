import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoUrl from '@assets/Colorlogonobackground_1759595577821.png';

export default function Footer() {
  return (
    <footer className="bg-hlf-blue-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logoUrl} alt="HALFMANN Logistics" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-white/80 mb-4">
              Sichere Fahrzeuglogistik – termingenau, transparent, europaweit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/leistungen" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-leistungen">Leistungen</Link></li>
              <li><Link href="/referenzen" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-referenzen">Referenzen</Link></li>
              <li><Link href="/ueber-uns" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-ueber-uns">Über uns</Link></li>
              <li><Link href="/jobs" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-jobs">Jobs</Link></li>
              <li><Link href="/kontakt" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+49XXXXXXXXX" className="hover:text-white transition-colors" data-testid="link-footer-phone">+49 (0) XXX / XXXXXXX</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@hlogistics.de" className="hover:text-white transition-colors" data-testid="link-footer-email">info@hlogistics.de</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Musterstraße 123<br />12345 Musterstadt</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-impressum">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm text-white/80 hover:text-white transition-colors" data-testid="link-footer-datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} HALFMANN Logistics. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
