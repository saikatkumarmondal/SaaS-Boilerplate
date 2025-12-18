'use client';

import { useTranslations } from 'next-intl';

import { ActiveLink } from '@/components/ActiveLink';

export const Sidebar = () => {
  const t = useTranslations('DashboardSidebar');

  return (
    <div className="w-full bg-white shadow-md md:min-h-screen md:w-64">
      <div className="p-4">
        <h2 className="mb-4 hidden text-lg font-semibold md:block">Dashboard Options</h2>
        <nav className="flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <ActiveLink href="/dashboard/business-settings" className="rounded-md px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700">
            Business Settings
          </ActiveLink>

          <ActiveLink href="/dashboard/page-settings" className="rounded-md px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700">
            Page Settings
          </ActiveLink>

          <ActiveLink href="/dashboard/post-scheduling">
            Post Scheduling (For Month)
          </ActiveLink>

          <ActiveLink href="/dashboard/post-scheduling-week">
            Post Scheduling (For Week)
          </ActiveLink>

        </nav>
      </div>
    </div>
  );
};
