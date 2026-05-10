import Link from "next/link";
import Image from "next/image";

import ContactButton from "@/components/ContactButton";
import ContributionGraph from "@/components/ContributionGraph";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center gap-20 px-6 py-24">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-yex font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m James.
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            I build software. This site is a tour of what I&apos;ve made, the
            things I&apos;m proud of, the things I learned from, and a bit about
            how I work.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/projects"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:bg-foreground/5"
            >
              About me
            </Link>
            <Link
              href="/resume"
              className="rounded-md border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:bg-foreground/5"
            >
              Resume
            </Link>
            <ContactButton />
          </div>
        </div>
        <div className="relative aspect-square w-64 shrink-0 overflow-hidden rounded-full border border-foreground/15 bg-foreground/10 md:w-72 lg:w-80">
          <Image
            src="/Headshot.png"
            alt="Portrait of James Dovener"
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 256px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="w-full overflow-x-auto">
        <h2 className="text-sm font-semibold tracking-tight text-foreground/60">
          Recent GitHub activity
        </h2>
        <div className="mt-4">
          <ContributionGraph />
        </div>
      </section>
    </main>
  );
}
