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
    message: '',
    botcheck: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '358dc6fa-7d0f-4b8d-ad94-2c54a7439145',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          botcheck: formData.botcheck,
          from_name: 'HALFMANN Logistics Website',
          subject: 'Neue Kontaktanfrage von HALFMANN Logistics',
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Nachricht gesendet!',
          description: 'Wir melden uns in Kürze bei Ihnen.',
        });
        setFormData({ name: '', email: '', phone: '', message: '', botcheck: false });
      } else {
        // Spezifische Fehlerbehandlung
        const errorMessage = result.message || 'Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.';
        
        toast({
          title: 'Fehler beim Senden',
          description: errorMessage.includes('not allowed') 
            ? 'Das Formular wird auf der finalen Domain funktionieren. Bitte testen Sie es nach dem Deployment auf one.com oder GitHub Pages.'
            : errorMessage,
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Netzwerkfehler',
        description: 'Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
        variant: 'destructive'
      });
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }}
                  checked={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                />
                
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
