'use client';

import PostSchedulingCard from '@/features/dashboard/PostSchedulingCard';

export default function PostSchedulingPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">
        Post Scheduling
      </h1>
      <PostSchedulingCard />

    </div>
  );
}
