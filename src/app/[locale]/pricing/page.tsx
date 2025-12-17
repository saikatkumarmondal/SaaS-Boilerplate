import Link from 'next/link';

import { PricingInformation } from '@/features/billing/PricingInformation';
import { PricingPlanList } from '@/utils/AppConfig';

export default function PricingPage() {
  const buttonList = Object.fromEntries(
    Object.values(PricingPlanList).map(plan => [
      plan.id,
      <Link
        key={plan.id}
        href="/sign-in"
        className="mt-6 inline-block w-full rounded-lg bg-purple-600 px-6 py-3 text-white"
      >
        Get Started
      </Link>,
    ]),
  );

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Pricing
      </h1>

      <PricingInformation buttonList={buttonList} />
    </div>
  );
}
