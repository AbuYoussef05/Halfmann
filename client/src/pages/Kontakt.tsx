import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState(Date.now());
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Zeitfalle: mindestens 2s seit Seitenload (Bot-Schutz)
    const timeSinceLoad = Date.now() - formStartTime;
    if (timeSinceLoad < 2000) {
      toast({ title: 'Zu schnell', description: 'Bitte warten Sie einen Moment.' });
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Web3Forms Pflichtfelder
    fd.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || '358dc6fa-7d0f-4b8d-ad94-2c54a7439145');
    fd.append('from_name', 'HALFMANN Logistics Website');
    fd.append('subject', 'Neue Kontaktanfrage von HALFMANN Logistics');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd // keine eigenen Header setzen!
      });

      let data: any = {};
      try { data = await res.json(); } catch {}

      if (data?.success) {
        toast({ title: 'Nachricht gesendet!', description: 'Wir melden uns in Kürze bei Ihnen.' });
        form.reset();
      } else if (data?.message) {
        toast({ title: 'Fehler beim Senden', description: data.message, variant: 'destructive' });
      } else {
        // Fallback: native Submit (um Dev/CORS-Previews zu umgehen)
        form.action = 'https://api.web3forms.com/submit';
        form.method = 'POST';
        form.submit();
      }
    } catch (err: any) {
      // Fallback: native Submit
      form.action = 'https://api.web3forms.com/submit';
      form.method = 'POST';
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-hlf-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-title">
            Kontakt
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-hlf-blue-900 mb-8" data-testid="text-contact-form-title">
                Senden Sie uns eine Nachricht
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot (unsichtbar) */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hlf-gray-900 mb-2">Name *</label>
                  <Input id="name" name="name" type="text" required data-testid="input-name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hlf-gray-900 mb-2">E-Mail *</label>
                  <Input id="email" name="email" type="email" required data-testid="input-email" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-hlf-gray-900 mb-2">Telefon</label>
                  <Input id="phone" name="phone" type="tel" data-testid="input-phone" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-hlf-gray-900 mb-2">Ihre Nachricht *</label>
                  <Textarea id="message" name="message" required rows={6} data-testid="input-message" />
                </div>

                {/* DSGVO */}
                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Ich stimme der Verarbeitung meiner Daten gemäß{' '}
                    <a href="/datenschutz" className="underline text-hlf-blue-700">Datenschutzerklärung</a> zu.
                  </span>
                </label>

                <Button type="submit" size="lg" className="bg-hlf-gradient text-white w-full" disabled={isSubmitting} data-testid="button-submit">
                  {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-hlf-blue-900 mb-8" data-testid="text-contact-info-title">
                  Kontaktinformationen
                </h2>
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-hlf-gradient">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">Telefon</h3>
                    <a href="tel:+4923118983985" className="text-hlf-gray-600 hover:text-hlf-blue-700" data-testid="link-phone">
                      0231 18983985
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-hlf-gradient">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">E-Mail</h3>
                    <a href="mailto:info@hlogistics.de" className="text-hlf-gray-600 hover:text-hlf-blue-700" data-testid="link-email">
                      info@hlogistics.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-hlf-gradient">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">Verwaltung</h3>
                    <a href="https://maps.google.com/?q=Hohestraße%20111%2C%2044139%20Dortmund" target="_blank" rel="noopener noreferrer" className="text-hlf-gray-600 hover:text-hlf-blue-700">
                      Hohestraße 111<br />
                      44139 Dortmund
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-hlf-gradient">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">Fahrzeuglager / Compound</h3>
                    <a href="https://maps.google.com/?q=Treibstraße%2030%2C%2044147%20Dortmund" target="_blank" rel="noopener noreferrer" className="text-hlf-gray-600 hover:text-hlf-blue-700">
                      Treibstraße 30<br />
                      44147 Dortmund
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
