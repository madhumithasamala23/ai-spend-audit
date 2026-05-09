export default function HowItWorks() {
  const steps = [
    "Add your AI tools and monthly spend",
    "Analyze overspending opportunities",
    "Save money with optimized recommendations",
  ];

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto text-center">
      
      <h2 className="text-4xl font-bold mb-14">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-8 bg-gray-950"
          >
            <div className="text-5xl font-bold text-gray-700 mb-4">
              0{index + 1}
            </div>

            <p className="text-gray-300">
              {step}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}