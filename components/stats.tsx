export default function Stats() {

  const stats = [
    {
      value: "$2.4M+",
      label: "AI spend analyzed",
    },
    {
      value: "1,200+",
      label: "startup audits completed",
    },
    {
      value: "38%",
      label: "average savings identified",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-3 gap-8">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-950 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-600 hover:-translate-y-1 transition duration-300"
          >

            <h3 className="text-5xl font-bold mb-3">
              {stat.value}
            </h3>

            <p className="text-gray-400 text-lg">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}