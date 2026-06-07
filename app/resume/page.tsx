"use client"

import Image from "next/image";

export default function ResumePage(){
    return (
        <main className="flex flex-col items-center w-full mx-auto max-w-5xl px-4 py-6 gap-4">
            <a
                href="/resume.pdf"
                download
                className="   self-end rounded-lg

                            text-white
                            bg-neutral-900
                            dark:text-black dark:bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium

                            transition
                            hover:bg-neutral-700
                            active:bg-neutral-700"
            >
                Download PDF
            </a>

            <iframe
                src="/resume.pdf" width="100%" height="800px"
                className="w-full h-[90vh] rounded-lg border border-neutral-200 lg:block hidden"
            />

            <div className="flex flex-col items-center gap-4 lg:hidden">
                <Image
                    className={"border-2 border-neutral-400"}
                    src="/resume-p1.png"
                    alt={"Resume Page 1"}
                    width={500}
                    height={800}
                />

                <Image
                    className={"border-2 border-neutral-400"}
                    src="/resume-p2.png"
                    alt="Resume Page 2"
                    width={500}
                    height={800}
                />
            </div>
        </main>
    );
}
