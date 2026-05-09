import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.3),transparent_50%)]" />
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          Audit your AI stack instantly and discover smarter plans,
          cheaper alternatives, and hidden savings opportunities.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Start Free Audit
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-900 transition">
            Learn More
          </button>
        </div>

      </section>
    </main>
  );
}