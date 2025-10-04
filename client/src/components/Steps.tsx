import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={step.number} className="relative" data-testid={`step-${step.number}`}>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-hlf-gradient flex items-center justify-center mb-2">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-hlf-blue-900 text-white flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-hlf-blue-900 mb-2" data-testid={`text-step-title-${step.number}`}>
              {step.title}
            </h3>
            <p className="text-sm text-hlf-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-hlf-blue-200 -translate-x-1/2" />
          )}
        </div>
      ))}
    </div>
  );
}
