import { Shield, DollarSign, Zap } from "lucide-react";
import FadeIn from "./fade-in";

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 py-24 max-w-6xl mx-auto"
    >
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Why Teams Use SpendPilot
        </h2>

        <p className="text-gray-400 mt-4">
          Identify hidden AI costs and optimize your stack instantly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <FadeIn>
        <div className="border border-gray-800 rounded-2xl p-7 bg-gray-950 hover:border-gray-600 transition duration-300 hover:-translate-y-1">

          <div className="flex items-center gap-4 mb-4">
            <DollarSign className="w-8 h-8 text-white" />

            <h3 className="text-2xl font-semibold">
              Cost Optimization
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Discover cheaper plans and reduce unnecessary AI spending.
          </p>

        </div>
        </FadeIn>

        {/* Card 2 */}
        <FadeIn>
        <div className="border border-gray-800 rounded-2xl p-7 bg-gray-950 hover:border-gray-600 transition duration-300 hover:-translate-y-1">

          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-8 h-8 text-white" />

            <h3 className="text-xl md:text-2xl font-semibold">
              Instant Audit
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Get a detailed spending analysis within seconds.
          </p>

        </div>
</FadeIn>
        {/* Card 3 */}
        <FadeIn>
        <div className="border border-gray-800 rounded-2xl p-7 bg-gray-950 hover:border-gray-600 transition duration-300 hover:-translate-y-1">

          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-white" />

            <h3 className="text-2xl font-semibold">
              Smart Recommendations
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Receive tailored optimization suggestions based on usage.
          </p>

        </div>
        </FadeIn>

      </div>
    </section>
  );
}