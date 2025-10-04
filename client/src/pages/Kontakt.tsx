import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Nachricht gesendet!',
        description: 'Wir melden uns in Kürze bei Ihnen.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hlf-gray-900 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hlf-gray-900 mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-hlf-gray-900 mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-hlf-gray-900 mb-2">
                    Ihre Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    data-testid="input-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-hlf-gradient text-white w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
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
                    <a href="tel:+49XXXXXXXXX" className="text-hlf-gray-600 hover:text-hlf-blue-700" data-testid="link-phone">
                      +49 (0) XXX / XXXXXXX
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
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">Adresse</h3>
                    <p className="text-hlf-gray-600">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-hlf-gradient">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hlf-blue-900 mb-1">Öffnungszeiten</h3>
                    <p className="text-hlf-gray-600">
                      Mo-Fr: 08:00 - 18:00 Uhr<br />
                      Sa: 09:00 - 14:00 Uhr<br />
                      So: Geschlossen
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-hlf-blue-50">
                <h3 className="font-semibold text-hlf-blue-900 mb-2">24/7 Notfall-Hotline</h3>
                <p className="text-sm text-hlf-gray-600 mb-3">
                  Für dringende Transportanfragen außerhalb der Geschäftszeiten
                </p>
                <a href="tel:+49XXXXXXXXX" className="text-lg font-bold text-hlf-blue-700 hover:text-hlf-blue-900" data-testid="link-emergency">
                  +49 (0) XXX / XXXXXXX
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
