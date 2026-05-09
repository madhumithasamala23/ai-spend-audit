"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface SavingsChartProps {
  currentSpend: number;
  optimizedSpend: number;
}

export default function SavingsChart({
  currentSpend,
  optimizedSpend,
}: SavingsChartProps) {

  const data = [
    {
      name: "Current",
      amount: currentSpend,
    },
    {
      name: "Optimized",
      amount: optimizedSpend,
    },
  ];

  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 mt-8">

      <h3 className="text-2xl font-semibold mb-6">
        Spend Comparison
      </h3>

      <div className="overflow-x-auto">

        <BarChart
          width={600}
          height={300}
          data={data}
        >
          <XAxis
            dataKey="name"
            stroke="#888888"
          />

          <YAxis stroke="#888888" />

          <Tooltip />

          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </div>

    </div>
  );
}