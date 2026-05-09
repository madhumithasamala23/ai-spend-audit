import { Shield, DollarSign, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Why Teams Use SpendPilot
        </h2>

        <p className="text-gray-400 mt-4">
          Identify hidden AI costs and optimize your stack instantly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950">
          <DollarSign className="w-10 h-10 mb-4 text-white" />

          <h3 className="text-2xl font-semibold mb-3">
            Cost Optimization
          </h3>

          <p className="text-gray-400">
            Discover cheaper plans and reduce unnecessary AI spending.
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950">
          <Zap className="w-10 h-10 mb-4 text-white" />

          <h3 className="text-2xl font-semibold mb-3">
            Instant Audit
          </h3>

          <p className="text-gray-400">
            Get a detailed spending analysis within seconds.
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950">
          <Shield className="w-10 h-10 mb-4 text-white" />

          <h3 className="text-2xl font-semibold mb-3">
            Smart Recommendations
          </h3>

          <p className="text-gray-400">
            Receive tailored optimization suggestions based on usage.
          </p>
        </div>

      </div>
    </section>
  );
}