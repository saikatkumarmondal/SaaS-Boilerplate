'use client';

import { useRouter } from 'next/navigation';

import PostSchedulingCard from '@/features/dashboard/PostSchedulingCard';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAYS_IN_MONTH = Array.from({ length: 30 }, (_, i) => i + 1);
const FIRST_DAY_INDEX = 3;

export default function PostSchedulingPage() {
  const router = useRouter();
  const emptyCells = Array.from({ length: FIRST_DAY_INDEX });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Post Scheduling</h1>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 border-b bg-gray-50/50">
          {DAYS.map(day => (
            <div key={day} className="border-r border-gray-200 p-3 text-center text-xs font-bold uppercase tracking-wider text-gray-500 last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid auto-rows-[160px] grid-cols-7">
          {emptyCells.map((_, idx) => (
            <div key={`empty-${idx}`} className="border-b border-r border-gray-100 bg-gray-50/30" />
          ))}

          {DAYS_IN_MONTH.map(day => (
            <div
              key={day}
              // Removed overflow-hidden so the card can grow outside this box
              className="group relative flex flex-col border-b border-r border-gray-100 p-3 transition-colors hover:bg-gray-50/50"
            >
              <div className="mb-2 text-sm font-medium text-gray-600">{day}</div>

              <div className="flex flex-1 items-center justify-start">
                {' '}
                {/* Align start for left-to-right growth */}
                <div

                  className="
                    /* Base State */ /* Hover
                    State */ relative z-10
                    origin-left scale-[0.6]
                    cursor-pointer transition-all duration-300 ease-in-out
                    hover:z-[100]
                    hover:translate-x-10
                    hover:scale-[2]
                    hover:shadow-2xl
                  "
                >
                  <PostSchedulingCard />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
