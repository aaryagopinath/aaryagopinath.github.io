import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
 useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xpwyberj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Try again later.");
    }
  };

  const projects = [
    {
       title: "AI Document Search Application",
          description:
            "Built a Spring Boot application for semantic search across TXT and PDF documents. Implemented embeddings using Spring AI + Ollama and used Postgres pgvector for similarity search. Added a grammar correction feature that automatically fixes grammar and spelling in any uploaded document or entered text. Containerized the application with Docker for reproducible deployments.",
          tech: ["Java", "Spring Boot", "Spring AI", "Ollama", "Postgres (pgvector)", "Docker"],
          repo: "https://github.com/aaryagopinath/ai-search-doc",
          demo: "",
    },
{
       title: "Inventory Management",
          description:
            "A complete Inventory Management System built with a React + Tailwind + shadcn UI frontend and a FastAPI backend. The system provides essential CRUD operations, smart stock monitoring, and expiry detection to help users manage products effectively.",
          tech: ["Python", "FastAPI", "React", "Typescript", "Tailwind CSS"],
          repo: "https://github.com/aaryagopinath/inventory-mgmt",
          demo: "",
    },
//     {
//       title: "Full Stack Maritime App",
//       description:
//         "A Java Spring Boot backend with React frontend built for maritime domain workflows (replace this placeholder with your real project details).",
//       tech: ["Java", "Spring Boot", "React", "MySQL"],
//       repo: "",
//       demo: "",
//     },
  ];

  return (
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-5xl mx-auto p-6">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold">Aarya Nair</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full Stack Developer • Java | Spring Boot | React • Open to UAE
                opportunities
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="https://github.com/aaryagopinath"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="https://www.linkedin.com/in/aarya-nair-812478243/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="mb-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Hi, I’m Aarya
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">

              Full-stack developer with 2+ years of experience in Java, Spring Boot, Python, React, and MySQL, focused on building scalable products and bringing AI capabilities into everyday applications.
              </p>

              <div className="flex gap-3">
                <a
                  href="/AaryaNair_Resume.pdf"
                  download
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:opacity-95"
                >
                  Download Resume
                </a>

                <a
                  href="#projects"
                  className="inline-block px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "Python",
                  "FastAPI",
                  "React",
                  "REST APIs",
                  "MySQL",
                  "Git",
                  "NLP/AI",
                  "Docker",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1 border rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="text-sm text-gray-600 dark:text-gray-300">
                  Preferred Roles
                </h4>
                <p className="text-sm">
                  Full Stack Developer, Backend Engineer, AI Integration
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Selected Projects</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="p-5 border rounded-2xl bg-white dark:bg-gray-800 shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 border rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        View Repo
                      </a>
                    ) : (
                      <span className="text-sm px-3 py-1 border rounded-md text-gray-500">
                        Repo coming soon
                      </span>
                    )}

                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-2xl bg-gray-50 dark:bg-gray-800">
                <p className="mb-3">
                  Interested in working together or want to know more about my
                  projects?
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a
                    href="mailto:aarya.gopinath210@gmail.com"
                    className="underline"
                  >
                    aarya.gopinath210@gmail.com
                  </a>
                </p>
                <p className="text-sm mt-2">
                  Location: Abu Dhabi (willing to relocate across UAE)
                </p>
              </div>

{/*               <form */}
{/*                 className="p-6 border rounded-2xl bg-white dark:bg-gray-900 shadow-sm" */}
{/*                 onSubmit={(e) => { */}
{/*                   e.preventDefault(); */}
{/*                   alert( */}
{/*                     "Use a backend or form service to handle submissions." */}
{/*                   ); */}
{/*                 }} */}
{/*               > */}
                <form onSubmit={handleSubmit} className="p-6 border rounded-2xl bg-white dark:bg-gray-900 shadow-sm">

                <label className="block mb-2 text-sm">Name</label>
                  <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border rounded-md bg-transparent"
                      />

                <label className="block mb-2 text-sm">Email</label>
                 <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mb-3 px-3 py-2 border rounded-md bg-transparent"
                      />

                <label className="block mb-2 text-sm">Message</label>
                  <textarea
                       required
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       className="w-full mb-3 px-3 py-2 border rounded-md bg-transparent"
                       rows={4}
                     />

                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                       Send message
                     </button>
                           {status && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-300">
            <p>Built by Aarya Nair • © {new Date().getFullYear()}</p>
            <p className="mt-2">
              Replace placeholder links, screenshots and resume with your actual
              content before publishing.
            </p>
          </footer>
        </div>
      </main>
  );
}
