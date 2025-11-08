export default function Impressum() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-hlf-blue-900 mb-8" data-testid="text-page-title">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Vertreten durch</h2>
            <p className="text-hlf-gray-600 mb-4">
              Salloum Barriga, Ibrahim, und Hamada Salem
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Postadresse</h2>
            <p className="text-hlf-gray-600 mb-4">
              Hohe Straße 111<br />
              44139 Dortmund
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Kontakt</h2>
            <p className="text-hlf-gray-600 mb-4">
              Telefon: 0231 18983985<br />
              E-Mail: info@hlogistics.de
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-hlf-gray-600 mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE366314956
            </p>

            <h2 className="text-2xl font-bold text-hlf-blue-900 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="text-hlf-gray-600 mb-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p className="text-hlf-gray-600 text-sm mt-8">
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-hlf-blue-700 underline">e-recht24.de</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
