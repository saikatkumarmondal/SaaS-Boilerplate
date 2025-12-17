import { Plus } from 'lucide-react';

export const DayColumn = () => {
  return (
    <div className="rounded-xl border bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium">Mon</span>
        <button className="rounded-full p-1 hover:bg-gray-100">
          <Plus size={16} />
        </button>
      </div>

      {/* Post cards will render here */}
      <div className="space-y-2" />
    </div>
  );
};
