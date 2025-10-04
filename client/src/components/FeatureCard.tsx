import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export default function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all h-full" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="rounded-lg bg-hlf-gradient p-3 w-fit mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-hlf-blue-900 mb-3" data-testid={`text-feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-hlf-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-hlf-gray-600">
              <span className="text-hlf-blue-500 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
