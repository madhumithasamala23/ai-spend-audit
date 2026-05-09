interface AISummaryProps {
  tool: string;
  savings: number;
  recommendation: string;
}

export default function AISummary({
  tool,
  savings,
  recommendation,
}: AISummaryProps) {

  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 mt-8">

      <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
        AI Insight
      </p>

      <p className="text-gray-300 leading-relaxed text-lg">

        Your current {tool} configuration presents an opportunity
        to optimize operational AI spending. Based on your selected
        plan and team size, switching to{" "}
        <span className="text-white font-semibold">
          {recommendation}
        </span>{" "}
        could save approximately{" "}
        <span className="text-green-400 font-semibold">
          ${savings}/month
        </span>{" "}
        while maintaining similar functionality and productivity.

      </p>

    </div>
  );
}