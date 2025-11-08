import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  role?: string;
}

export default function Testimonial({ quote, author, company, role }: TestimonialProps) {
  return (
    <Card className="p-8 hover-elevate transition-all h-full" data-testid="card-testimonial">
      <Quote className="h-10 w-10 text-hlf-blue-400 mb-4" />
      <blockquote className="text-lg text-hlf-gray-900 mb-6 leading-relaxed italic" data-testid="text-testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="border-t pt-4">
        <p className="font-semibold text-hlf-blue-900" data-testid="text-testimonial-author">
          {author}
        </p>
        <p className="text-sm text-hlf-gray-600">
          {role && `${role}, `}{company}
        </p>
      </div>
    </Card>
  );
}
