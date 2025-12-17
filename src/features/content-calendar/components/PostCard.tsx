import { MoreVertical } from 'lucide-react';
import React from 'react';

export const PostCard = () => {
  return (
    <div className="relative rounded-lg border p-3">
      <button className="absolute right-2 top-2">
        <MoreVertical size={14} />
      </button>

      <div className="mb-2 text-sm">Text preview…</div>

      <div className="flex gap-2 text-gray-400">
        {/* Platform toggles go here */}
      </div>
    </div>
  );
};
