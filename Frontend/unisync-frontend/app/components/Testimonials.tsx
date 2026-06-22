"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aayush Sharma",
      role: "Computer Science Student",
      message:
        "UniSync helped me find teammates for my final year project within days. Collaboration has never been this easy.",
    },
    {
      name: "Sushma Karki",
      role: "Research Student",
      message:
        "Sharing research papers and working on group studies feels seamless. It changed how I learn with peers.",
    },
    {
      name: "Rohan Thapa",
      role: "Engineering Student",
      message:
        "The digital agreement feature is a game changer. It keeps every project role and task clearly defined.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#120606] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Students Say
          </h2>
          <p className="mt-4 text-white/70">
            Real experiences from students using UniSync for collaboration and learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative p-8 rounded-3xl
                bg-white/5 border border-white/10
                backdrop-blur-xl

                hover:scale-[1.03]
                hover:bg-white/10
                transition-all duration-300
              "
            >

              {/* Stars */}
              <div className="flex gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Message */}
              <p className="mt-5 text-white/80 leading-relaxed">
                “{item.message}”
              </p>

              {/* Name */}
              <h4 className="mt-6 font-semibold text-lg">
                {item.name}
              </h4>

              {/* Role */}
              <p className="text-white/60 text-sm">
                {item.role}
              </p>

              {/* Glow hover effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}