export default function Impressum() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-hlf-blue-900 mb-8" data-testid="text-page-title">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-hlf-gray-600 mb-4">
              HALFMANN Logistics GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Vertreten durch</h2>
            <p className="text-hlf-gray-600 mb-4">
              Geschäftsführer: Max Mustermann
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Kontakt</h2>
            <p className="text-hlf-gray-600 mb-4">
              Telefon: +49 (0) XXX / XXXXXXX<br />
              E-Mail: info@hlogistics.de
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Registereintrag</h2>
            <p className="text-hlf-gray-600 mb-4">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-hlf-gray-600 mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-hlf-gray-600 mb-4">
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold text-hlf-blue-900 mt-6 mb-3">Haftung für Inhalte</h3>
            <p className="text-hlf-gray-600 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold text-hlf-blue-900 mt-6 mb-3">Haftung für Links</h3>
            <p className="text-hlf-gray-600 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
