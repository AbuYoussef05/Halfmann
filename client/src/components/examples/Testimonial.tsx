import Testimonial from '../Testimonial';

export default function TestimonialExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <Testimonial
        quote="Zuverlässiger Partner für unsere Fahrzeuglogistik. Immer pünktlich und professionell."
        author="Michael Schmidt"
        company="Autohaus Schmidt GmbH"
        role="Geschäftsführer"
      />
      <Testimonial
        quote="Exzellenter Service und transparente Kommunikation. Sehr empfehlenswert!"
        author="Sarah Weber"
        company="Weber Automobil AG"
        role="Logistikleiterin"
      />
    </div>
  );
}
