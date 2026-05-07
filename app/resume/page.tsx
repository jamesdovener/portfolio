"use client"

export default function ResumePage(){
    return (
        <main className="flex justify-center w-full mx-auto max-w-5xl px-4 py-6">
            <iframe
                src="/resume.pdf" width="100%" height="800px"
                className="w-full h-[90vh] rounded-lg border border-neutral-200"
            />
        </main>
    );
}




