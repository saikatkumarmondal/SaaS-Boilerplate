import { CalendarGrid } from '@/features/content-calendar/components/CalendarGrid';

export default function ContentCalendarPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Content Calendar</h1>
      <CalendarGrid />
    </div>
  );
}
