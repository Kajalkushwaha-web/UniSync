"use client";

import {
  UserPlus,
  Search,
  Users,
  BookOpenCheck,
  Handshake,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={26} />,
      title: "Create Academic Profile",
      description:
        "Sign up and build your profile with skills, interests, and academic goals.",
    },
    {
      icon: <Search size={26} />,
      title: "Discover Peers",
      description:
        "Find students, mentors, and researchers with similar goals and subjects.",
    },
    {
      icon: <Users size={26} />,
      title: "Form Collaboration",
      description:
        "Create or join study groups and research teams instantly.",
    },
    {
      icon: <BookOpenCheck size={26} />,
      title: "Research Papers",
      description:
        "Upload, share, and explore academic research collaboratively.",
    },
    {
      icon: <Handshake size={26} />,
      title: "Digital Agreements",
      description:
        "Define roles, tasks, and responsibilities with secure agreements.",
    },
    {
      icon: <Activity size={26} />,
      title: "Track Progress",
      description:
        "Monitor participation, progress, and contributions in real time.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Trusted System",
      description:
        "Verified users ensure safe and reliable academic collaboration.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#120606] text-white overflow-hidden">

      {/* Background Glow (NO JS animation needed) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            How UniSync Works
          </h2>

          <p className="mt-5 text-white/70 text-lg">
            A simple flow that connects students, research, and collaboration in one system.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="mt-20 space-y-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                relative group p-6 md:p-8 rounded-3xl
                border border-white/10
                bg-white/5 backdrop-blur-xl

                transition-all duration-300

                hover:bg-white/10
                hover:scale-[1.02]
                hover:border-orange-400/40

                flex items-start gap-5
                ${index % 2 === 0 ? "md:ml-0" : "md:ml-20"}
              `}
            >

              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm animate-pulse">
                {index + 1}
              </div>

              {/* Icon Box */}
              <div className="text-orange-300 mt-1">
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold group-hover:text-orange-300 transition">
                  {step.title}
                </h3>

                <p className="mt-2 text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}