
import { useState } from "react";

const projects = [
  {
    title: "Employee Registration System",
    description:
      "A responsive web page for registering employees and viewing employee information.",
    tools: "HTML, CSS, Bootstrap",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal website that introduces me, displays my projects, and provides contact information.",
    tools: "ReactJS, Tailwind CSS",
  },
title: "Laundry Management System",
    description:
      "A proposed system for organizing laundry customer records and tracking laundry orders.",
    tools: "System Analysis and Design",
  },
 
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notice, setNotice] = useState("");

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Projects", "projects"],
    ["Resume", "resume"],
    ["Contact", "contact"],
  ];

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNotice("Please complete all fields.");
      return;
    }

    setNotice(
      "Thank you for your message! This demo form does not send messages yet."
    );
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-2xl font-bold text-blue-400">
            ADVINCULA<span className="text-white">.</span>
          </a>

          <button
            className="rounded-lg border border-slate-700 px-3 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col gap-4 border-b border-slate-800 bg-slate-950 p-5 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}
          >
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:py-32"
        >
          <div>
            <p className="mb-4 font-semibold tracking-widest text-blue-400">
              HELLO, WELCOME TO MY PORTFOLIO
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Hi, I'm <span className="text-blue-400">Advincula.</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-slate-300">
              IT Student & Aspiring Web Developer
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              I am an Information Technology student learning how to build
              useful, simple, and user-friendly websites and applications.
              This portfolio presents my background, projects, and skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-blue-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-4 border-blue-500 bg-slate-900 shadow-2xl shadow-blue-950 sm:h-80 sm:w-80">
            <div className="text-center">
              <div className="text-7xl font-black text-blue-400">MA</div>
              <p className="mt-2 text-sm tracking-widest text-slate-400">
                MY PORTFOLIO
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-slate-900 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              small="GET TO KNOW ME"
              title="About Me"
            />
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
                <p className="mt-4 leading-8 text-slate-400">
                  I am an IT student who enjoys learning about web development,
                  programming, and technology. I am working to improve my
                  skills through school activities and personal projects.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
                <h3 className="text-xl font-bold">My Skills</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "ReactJs",
                    "Tailwind CSS",
                    
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-950 px-4 py-2 text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              small="MY WORK"
              title="Projects & Work Samples"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {projects
                .slice(0, showAll ? projects.length : 2)
                .map((project, index) => (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-xl font-bold text-blue-400">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">
                      {project.description}
                    </p>
                    <p className="mt-5 text-sm text-blue-300">
                      Tools: {project.tools}
                    </p>
                  </article>
                ))}
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-8 rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-300 hover:bg-blue-950"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        </section>

        <section id="resume" className="scroll-mt-20 bg-slate-900 py-20">
          
<div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
  <h3 className="text-xl font-bold text-blue-400">
    Education
  </h3>

  <p className="mt-4 font-semibold">
    Bachelor of Science in Information Technology
  </p>

  <p className="mt-2 text-slate-400">
    Cavite State University - Tanza Campus
  </p>

  <p className="mt-2 text-slate-400">
    Current Student
  </p>

  <p className="mt-2 text-slate-400">
    I am learning programming, web development,
    database management, and system development.
    I am improving my skills through school activities
    and projects.
  </p>
<p className="mt-2 text-slate-400">My goal is to improve my programming skills,
 gain experience in building websites, 
and become a capable 
IT professional.
</p>
</div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle small="LET'S CONNECT" title="Contact Me" />
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Write your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
              >
                Submit Message
              </button>

              {notice && (
                <p role="status" className="text-sm text-blue-300">
                  {notice}
                </p>
              )}
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Email: your-email@example.com
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Advincula Portfolio. Built with ReactJS
        and Tailwind CSS.
      </footer>
    </div>
  );
}

function SectionTitle({ small, title }) {
  return (
    <div className="mb-10">
      <p className="font-semibold tracking-widest text-blue-400">{small}</p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </div>
  );
}