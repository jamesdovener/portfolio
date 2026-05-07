"use client";

import React, { useState } from "react";

const EMAIL = "dovenerj@protonmail.com";

export default function ContactButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const isDesktop = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!isDesktop) return;

    event.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={handleClick}
      aria-live="polite"
      className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
        copied
          ? "border-foreground/40 bg-foreground/5"
          : "border-foreground/20 hover:bg-foreground/5"
      }`}
    >
      {copied ? (
        <>
          <span className="opacity-60">Copied </span>
          {EMAIL}
        </>
      ) : (
        "Contact"
      )}
    </a>
  );
}
