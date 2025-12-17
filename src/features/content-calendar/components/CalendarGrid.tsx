import { DayColumn } from './DayColumn';

export const CalendarGrid = () => {
  const days = Array.from({ length: 7 });

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((_, index) => (
        <DayColumn key={index} />
      ))}
    </div>
  );
};
