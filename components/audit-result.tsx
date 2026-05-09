import SavingsChart from "./savings-chart";
interface AuditResultProps {
  result: {
    tool: string;
    currentSpend: number;
    optimizedSpend: number;
    savings: number;
    recommendation: string;
    reason: string;
  };
}

export default function AuditResult({
  result,
}: AuditResultProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-24">

      <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-gray-400 uppercase tracking-wider text-sm">
            Potential Savings
          </p>

          <h2 className="text-6xl font-bold mt-3 text-white">
            ${result.savings}
          </h2>

          <p className="text-gray-500 mt-2">
  monthly savings
    </p>

    <p className="text-green-400 mt-4 text-lg font-medium">
  ${result.savings * 12}/year saved
    </p>

        </div>
    <div className="grid md:grid-cols-3 gap-6 mb-10">

  <div className="bg-black border border-gray-800 rounded-2xl p-6 text-center">
    <p className="text-gray-500 text-sm mb-2">
      Monthly Savings
    </p>

    <h3 className="text-3xl font-bold text-green-400">
      ${result.savings}
    </h3>
  </div>

  <div className="bg-black border border-gray-800 rounded-2xl p-6 text-center">
    <p className="text-gray-500 text-sm mb-2">
      Annual Savings
    </p>

    <h3 className="text-3xl font-bold text-green-400">
      ${result.savings * 12}
    </h3>
  </div>

  <div className="bg-black border border-gray-800 rounded-2xl p-6 text-center">
    <p className="text-gray-500 text-sm mb-2">
      Optimization Rate
    </p>

    <h3 className="text-3xl font-bold text-white">
      {Math.round(
        (result.savings / result.currentSpend) * 100
      )}
      %
    </h3>
  </div>

</div>
        {/* Details */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-black rounded-2xl p-6 border border-gray-800">

            <p className="text-gray-500 text-sm mb-2">
              Current Spend
            </p>

            <h3 className="text-3xl font-bold">
              ${result.currentSpend}
            </h3>

          </div>

          <div className="bg-black rounded-2xl p-6 border border-gray-800">

            <p className="text-gray-500 text-sm mb-2">
              Optimized Spend
            </p>

            <h3 className="text-3xl font-bold">
              ${result.optimizedSpend}
            </h3>

          </div>

        </div>

        {/* Recommendation */}
        <div className="mt-8 bg-black rounded-2xl p-6 border border-gray-800">

          <p className="text-gray-500 text-sm mb-2">
            Recommendation
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            {result.recommendation}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {result.reason}
          </p>

        </div>
      <SavingsChart
  currentSpend={result.currentSpend}
  optimizedSpend={result.optimizedSpend}
/>
      </div>

    </section>
  );
}