'use client';
import { Plus } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostSchedulingCardWeek from '@/features/dashboard/PostSchedulingCardWeek';
import type { AppDispatch, RootState } from '@/store';
import { setContent, setMediaFile, setPostTime, setTextContent } from '@/store/postSchedulerSlice';

const WEEK_DAYS = [
  { label: 'Monday', time: '9 a.m.–6 p.m.' },
  { label: 'Tuesday', time: '9 a.m.–6 p.m.' },
  { label: 'Wednesday', time: '8 a.m.–6 p.m.' },
  { label: 'Thursday', time: '8 a.m.–6 p.m.' },
  { label: 'Friday', time: '9–11 a.m. and 2–4 p.m.' },
  { label: 'Saturday', time: '8 a.m.–6 p.m.' },
  { label: 'Sunday', time: '9–11 a.m. and 3–6 p.m.' },
];

export default function PostSchedulingWeek() {
  const dispatch = useDispatch<AppDispatch>();
  const content = useSelector((state: RootState) => state.postSchedule.content);

  // Set entire content at once
  const handleSetContent = () => {
    const newState = {
      textContent: 'Hello World!',
      mediaFile: null,
      postTime: '2025-12-20T10:00:00',
    };
    dispatch(setContent(newState));
  };

  // Or set individual fields
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setTextContent(e.target.value));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    dispatch(setMediaFile(file));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPostTime(e.target.value));
  };
  return (
    <div className="min-h-screen bg-[#fdf8e9] p-6">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">

        <h1 className="text-3xl font-semibold">{content.textContent}</h1>
        {/* 1. Header Row */}
        <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50/50">
          {WEEK_DAYS.map(day => (
            <div key={day.label} className="border-r border-gray-200 p-4 text-center last:border-r-0">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                {day.label}
              </h3>
            </div>
          ))}
        </div>

        {/* 2. Calendar Grid */}
        <div className="grid min-h-[750px] grid-cols-7">
          {WEEK_DAYS.map((day, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-r border-gray-100 bg-white p-3 last:border-r-0"
            >
              {/* Column Header: Date and Blue Plus Icon */}
              <div className="mb-1 flex items-start justify-between">
                <span className="text-lg font-extrabold text-gray-400">{index + 1}</span>

                {/* Styled Plus Button */}
                <button
                  className="rounded-full bg-blue-600 p-1 text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
                  title={`Schedule for ${day.label}`}
                  onClick={handleSetContent}
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>

              {/* Time Label from your requirements */}
              <div className="mb-2 rounded bg-blue-50/50 px-2 py-1 text-center text-[10px] font-medium text-blue-700">
                {day.time}
              </div>

              {/* 3. Post Blocks Area */}
              <div className="flex flex-col gap-3">
                {/* Manual examples for visual check */}
                {index === 0 && (
                  <PostSchedulingCardWeek type="image" platforms={['fb', 'ig']} />
                )}
                {index === 1 && (
                  <>
                    <PostSchedulingCardWeek type="video" platforms={['x']} />
                    <PostSchedulingCardWeek type="text" platforms={['li', 'ig']} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
