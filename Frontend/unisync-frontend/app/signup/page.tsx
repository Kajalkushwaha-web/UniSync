"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("SUBMIT FIRED");

  if (!form.name || !form.email || !form.password || !form.confirm) {
    alert("Please fill all fields");
    return;
  }

  if (form.password !== form.confirm) {
    alert("Passwords do not match");
    return;
  }

  console.log("Account created:", form);
  alert("Account created successfully!");

  router.push("/dashboard");
};
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#3B0A0A] via-[#8B1E12] to-[#F97316] flex items-center justify-center p-6">

      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10">

        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center font-bold text-[#e1685b] text-sm">
            U
          </div>
          <span className="text-white font-bold text-lg">UniSync</span>
        </div>

        <h1 className="text-3xl font-bold text-white leading-tight">
          Create account
        </h1>

        <p className="mt-2 text-white/70 text-sm">
          Join UniSync and start collaborating
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-7 flex flex-col gap-4">
          <input
            id="name"
            type="text"
            placeholder="Full name"
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.07] text-white text-sm"
          />

          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.07] text-white text-sm"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.07] text-white text-sm"
          />

          <input
            id="confirm"
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.07] text-white text-sm"
          />

          <button
            type="submit"
            className="mt-2 bg-white text-[#e1685b] py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Create account
          </button>

        </form>

        <p className="mt-5 text-center text-sm text-white/70">
          Already have an account?{" "}
          <a href="/login" className="text-white font-medium underline">
            Log in
          </a>
        </p>

      </div>
    </section>
  );
}