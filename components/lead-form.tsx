"use client";

import { useState } from "react";

export default function LeadForm() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-black border border-gray-800 rounded-2xl p-6 mt-8 text-center">
        
        <h3 className="text-2xl font-semibold mb-3">
          Audit Saved Successfully
        </h3>

        <p className="text-gray-400">
          We’ll notify you when new AI spend optimizations apply to your stack.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 mt-8">

      <h3 className="text-2xl font-semibold mb-2">
        Save Full Audit Report
      </h3>

      <p className="text-gray-400 mb-6">
        Get optimization updates and future savings insights.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          name="role"
          placeholder="Your Role"
          value={formData.role}
          onChange={handleChange}
          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Save My Audit
        </button>

      </form>

    </div>
  );
}