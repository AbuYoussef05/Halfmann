interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-12">
      {events.map((event, index) => (
        <div key={index} className="flex gap-6 group" data-testid={`timeline-event-${index}`}>
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-hlf-gradient flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110">
              {event.year}
            </div>
            {index < events.length - 1 && (
              <div className="w-0.5 flex-1 bg-hlf-blue-200 mt-4" />
            )}
          </div>
          <div className="pb-12 flex-1">
            <h3 className="text-xl font-semibold text-hlf-blue-900 mb-2" data-testid={`text-timeline-title-${index}`}>
              {event.title}
            </h3>
            <p className="text-hlf-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
