import { Facebook, Image as ImageIcon, Instagram, MoreVertical } from 'lucide-react';
import React from 'react';

export default function PostSchedulingPage() {
  return (
    <div className="p-6">
      {/* Post Card */}
      <div className="w-80 space-y-3 rounded-2xl border bg-white p-4 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-red-500" />
            <div className="h-2 w-24 rounded bg-gray-300" />
          </div>
          <MoreVertical className="size-4 text-gray-500" />
        </div>

        {/* Content lines */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-gray-300" />
          <div className="h-3 w-2/3 rounded bg-gray-200" />
        </div>

        {/* Image placeholder */}
        <div className="flex h-20 items-center justify-center rounded-xl bg-gray-100">
          <ImageIcon className="size-6 text-gray-400" />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <Facebook size={16} />
          </div>
          <div className="flex size-8 items-center justify-center rounded-full bg-pink-500 text-white">
            <Instagram size={16} />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="h-2 flex-1 rounded-full bg-orange-400" />
          <button className="h-2 flex-1 rounded-full bg-yellow-400" />
        </div>
      </div>
    </div>
  );
}
