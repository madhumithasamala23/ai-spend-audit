"use client";

import { useEffect, useState } from "react";
import { runAudit } from "@/lib/audit-engine";
import AuditResult from "./audit-result";
import { v4 as uuidv4 } from "uuid";
const tools = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "GitHub Copilot",
  "Gemini",
];

  export default function AuditForm() {

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });
  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
  localStorage.setItem(
    "audit-form",
    JSON.stringify(formData)
  );
    }, [formData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);

  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  const auditResult = runAudit(formData);

  console.log(auditResult);

  setResult(auditResult);

  const auditId = uuidv4();

    setShareUrl(
  `${window.location.origin}/audit/${auditId}`
    );

  setLoading(false);
}

  return (
    <section
  id="audit-form"
  className="max-w-3xl mx-auto px-6 py-24"
    >

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Start Your AI Spend Audit
        </h2>

        <p className="text-gray-400 mt-4">
          Enter your current AI stack and spending details.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-950 border border-gray-800 rounded-3xl p-8 space-y-6"
      >

        {/* Tool */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            AI Tool
          </label>

          <select
            name="tool"
            value={formData.tool}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          >
            <option value="">Select Tool</option>

            {tools.map((tool) => (
              <option key={tool} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        </div>

        {/* Plan */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Current Plan
          </label>

          <input
            type="text"
            name="plan"
            placeholder="e.g. Pro, Team, Enterprise"
            value={formData.plan}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />
        </div>

        {/* Spend */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            name="spend"
            placeholder="200"
            value={formData.spend}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />
        </div>

        {/* Seats */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Number of Seats
          </label>

          <input
            type="number"
            name="seats"
            placeholder="5"
            value={formData.seats}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />
        </div>

        {/* Team Size */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Team Size
          </label>

          <input
            type="number"
            name="teamSize"
            placeholder="10"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          />
        </div>

        {/* Use Case */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Primary Use Case
          </label>

          <select
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
          >
            <option value="">Select Use Case</option>
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data Analysis</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <button
  type="submit"
  disabled={loading}
    className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-50"
    >
    {loading ? "Analyzing..." : "Generate Audit"}
    </button>

      </form>
      {result && (
  <>
    <AuditResult result={result} />

    <div className="max-w-4xl mx-auto px-6 pb-24">

      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">

        <h3 className="text-2xl font-semibold mb-3">
          Share Audit Results
        </h3>

        <p className="text-gray-400 mb-6">
          Share this audit with your team or stakeholders.
        </p>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3 text-gray-300"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              alert("Link copied!");
            }}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Copy Link
          </button>

        </div>

      </div>

    </div>
  </>
)}
    </section>
  );
}