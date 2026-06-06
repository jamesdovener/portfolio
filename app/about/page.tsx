import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – James Dovener",
  description: "A bit about who I am, what I work on, and how I work.",
};

const skills = [
  "Python",
  "Java",
  "ServiceNow",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

const principles = [
  {
    title: "Ship small.",
    body: "Smaller changes are easier to review, easier to roll back, and ship sooner.",
  },
  {
    title: "Understand the code first.",
    body: "Before working on a piece of code, try to understand how it fits into the larger system.",
  },
  {
    title: "Optimize for clarity.",
    body: "The most concise code is not always the best code. Write code for the next developer.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>

      <section className="mt-10 space-y-4 text-foreground/80">
        <p>
          I&apos;m James, a developer based in York. I like finding creative
          solutions to problems and working with others to deliver software
          that makes an impact.
        </p>
        <ul className="list-disc">
          <li>Currently looking for entry-level software developer positions.</li>
          <li>Recently working with natural language processing and predicting outcomes of prs.</li>
          <li>Working on improving my website portfolio and learning more about the react framework.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I work with
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-sm text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">How I work</h2>
        <ul className="mt-4 space-y-4 text-foreground/80">
          {principles.map((principle) => (
            <li key={principle.title}>
              <strong className="text-foreground">{principle.title}</strong>{" "}
              {principle.body}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
