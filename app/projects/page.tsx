import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – James Dovener",
  description: "A selection of things I've built — what they do and what I learned.",
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "This site. My first React project, built with Next.js and Tailwind CSS. I wanted to learn React by actually " +
        "deploying something and working on improving it iteratively and displaying the sourcecode on my GitHub.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/jamesdovener/portfolio",
  },
  {
    name: "PR-Triage-Assistant",
    description:
      "My dissertation project which used machine learning techniques to predict the merge probability of pull " +
        "requests using the information available at the time of their creation.",
    tags: ["Python", "PostgreSQL", "Machine Learning", "XGBoost", "Pandas"],
    repoUrl: "https://github.com/jamesdovener",
  },
  {
    name: "CIFAR-10 Image Classification Project",
    description:
      "A PyTorch convolutional neural network trained to classify images from the CIFAR-10 dataset into its ten " +
        "categories.",
    tags: ["Python", "Jupyter Notebooks", "PyTorch", "Convolutional Neural Networks", "Machine Learning"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        A selection of things I&apos;ve built. Including descriptions and links to the code repositories.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col rounded-lg border border-foreground/15 bg-foreground/5 p-6"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {project.name}
            </h2>
            <p className="mt-2 flex-1 text-sm text-foreground/70">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-foreground/15 bg-background px-2.5 py-0.5 text-xs
                            text-foreground/70"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-foreground/20 px-3 py-1.5 hover:bg-foreground/5"
                  >
                    Code Repo
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-foreground px-3 py-1.5 text-background hover:opacity-90"
                  >
                    Live demo
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
