export default function Testimonials() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        Loved by Startup Teams
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            name: "Rahul Mehta",
            role: "CTO at DevStack",
            text: "We reduced AI spending by 38% within one week.",
          },
          {
            name: "Ananya Sharma",
            role: "Founder at PromptFlow",
            text: "SpendPilot helped us identify unused subscriptions instantly.",
          },
          {
            name: "Jason Lee",
            role: "Engineering Lead",
            text: "The recommendations were surprisingly accurate and actionable.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-8 bg-gray-950 hover:border-gray-600 hover:-translate-y-1 transition duration-300"
          >
            <p className="text-gray-300 mb-6">
              "{item.text}"
            </p>

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.role}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}