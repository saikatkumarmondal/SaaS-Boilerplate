import { Facebook, Image as LucideImageIcon, Instagram, MoreVertical } from 'lucide-react';
import React from 'react';

export default function PostSchedulingCard() {
  return (
    // Center the card within the calendar cell container
    <div className="flex size-full items-center justify-center">
      {/* Post Card: Adjusted width and reduced padding to fit the grid */}
      <div className="w-28 space-y-2 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-red-500" />
            <div className="h-1.5 w-12 rounded bg-gray-200" />
          </div>
          <MoreVertical className="size-3 text-gray-400" />
        </div>

        {/* Content lines: Shorter and thinner for a cleaner look */}
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-gray-100" />
          <div className="h-1.5 w-3/4 rounded bg-gray-50" />
        </div>

        {/* Image placeholder: Height reduced to prevent vertical overflow */}
        <div className="flex h-10 items-center justify-center rounded-lg bg-gray-50">
          <LucideImageIcon className="size-3.5 text-gray-300" />
        </div>

        {/* Social icons: Scaled down to size-5 */}
        <div className="flex items-center gap-1.5">
          <div className="flex size-5 items-center justify-center rounded-full bg-blue-600 text-white">
            <Facebook size={10} />
          </div>
          <div className="flex size-5 items-center justify-center rounded-full bg-pink-500 text-white">
            <Instagram size={10} />
          </div>
        </div>

        {/* Action buttons: Subtle bars at the bottom */}
        <div className="flex gap-1.5 pt-0.5">
          <button className="h-1 flex-1 rounded-full bg-orange-300" />
          <button className="h-1 flex-1 rounded-full bg-yellow-300" />
        </div>
      </div>
    </div>
  );
}
