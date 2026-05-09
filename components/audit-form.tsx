"use client";

import { useState } from "react";
import { runAudit } from "@/lib/audit-engine";
import AuditResult from "./audit-result";
const tools = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "GitHub Copilot",
  "Gemini",
];

  export default function AuditForm() {

  const [result, setResult] = useState<any>(null);

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const auditResult = runAudit(formData);

    console.log(auditResult);

    setResult(auditResult);
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
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Generate Audit
        </button>

      </form>
      {result && <AuditResult result={result} />}
    </section>
  );
}