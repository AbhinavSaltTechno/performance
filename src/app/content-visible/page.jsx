// app/page.tsx
"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  // 1. Restore scroll position
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollY");
    if (saved) window.scrollTo(0, parseInt(saved));
  }, []);

  // 2. Save scroll position when scrolling
  useEffect(() => {
    const onScroll = () => sessionStorage.setItem("scrollY", window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main class="space-y-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <section
          key={i}
          class="h-[10vh] border p-2 
                 [content-visibility:auto] 
                 [contain-intrinsic-size:200px]"
        >
          <p>Section {i + 1}</p>

          {i === 5 && <Image width={80} height={80} priority src="https://picsum.photos/300" />}
        </section>
      ))}
    </main>
  );
}
