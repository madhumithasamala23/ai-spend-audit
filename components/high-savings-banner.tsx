interface HighSavingsBannerProps {
  savings: number;
}

export default function HighSavingsBanner({
  savings,
}: HighSavingsBannerProps) {

  if (savings < 500) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 mt-8">

      <h3 className="text-2xl font-bold mb-3">
        Significant Savings Opportunity
      </h3>

      <p className="text-gray-300 leading-relaxed mb-6">

        Your team could potentially save over{" "}
        <span className="text-green-400 font-semibold">
          ${(savings * 12).toLocaleString()}/year
        </span>{" "}
        on AI infrastructure costs.

        Credex may help unlock additional discounted AI credits
        and enterprise optimization opportunities.

      </p>

      <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Book Credex Consultation
      </button>

    </div>
  );
}