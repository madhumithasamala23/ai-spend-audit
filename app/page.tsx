import Navbar from "@/components/navbar";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import AuditForm from "@/components/audit-form";
import Stats from "@/components/stats";
export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.3),transparent_50%)]" />

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 min-h-screen">

        <h1 className="text-5xl md:text-6xl font-bold max-w-5xl leading-tight">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          Audit your AI stack instantly and discover smarter plans,
          cheaper alternatives, and hidden savings opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <a
  href="#audit-form"
  className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
  >
  Start Free Audit
  </a>

          <a
  href="#features"
  className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-900 transition"
  >
  Learn More
  </a>

        </div>

      </section>
      <Stats />
      <AuditForm />
      <Features />

      <HowItWorks />

      <Testimonials />

      <Footer />

    </main>
  );
}