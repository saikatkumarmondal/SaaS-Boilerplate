import { Facebook, FileText, Image as ImageIcon, Instagram, MoreVertical, Video } from 'lucide-react';
import React from 'react';

type PostCardProps = {
  type?: 'text' | 'image' | 'video';
  platforms?: string[];
  statusColor?: string;
};

export default function PostSchedulingCardWeek({ type = 'text', platforms = [], statusColor = 'bg-orange-400' }: PostCardProps) {
  return (
    <div className="relative mb-3 w-full max-w-[180px] rounded-lg border border-gray-100 bg-white p-3 shadow-md">
      {/* Top Action Menu */}
      <button className="absolute right-1 top-2 text-gray-300 hover:text-gray-500">
        <MoreVertical size={14} />
      </button>

      {/* Placeholder Text Lines */}
      <div className="mb-3 space-y-2">
        <div className="h-2 w-3/4 rounded-full bg-gray-200" />
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-gray-800" />
          <div className="h-2 w-1/2 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Content Preview and Platforms */}
      <div className="mb-3 flex items-center justify-between">
        <div className="rounded-full border border-gray-200 p-1 text-gray-400">
          {type === 'image' && <ImageIcon size={16} />}
          {type === 'text' && <FileText size={16} />}
          {type === 'video' && <Video size={16} />}
        </div>

        <div className="flex gap-1">
          <Facebook size={18} className={platforms.includes('fb') ? 'text-blue-600' : 'text-gray-300 grayscale'} />
          <Instagram size={18} className={platforms.includes('ig') ? 'text-pink-500' : 'text-gray-300 grayscale'} />
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex gap-2">
        <div className={`h-3 w-10 ${statusColor} rounded-full opacity-50`} />
        <div className="h-3 w-10 rounded-full bg-yellow-400 opacity-50" />
      </div>
    </div>
  );
}
