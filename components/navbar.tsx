export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-6">
      
      <h1 className="text-2xl font-bold">
        SpendPilot
      </h1>

      <a
  href="#audit-form"
  className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
  >
  Get Started
  </a>

    </nav>
  );
}