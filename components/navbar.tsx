export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      
      <h1 className="text-2xl font-bold">
        SpendPilot
      </h1>

      <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
        Get Started
      </button>

    </nav>
  );
}