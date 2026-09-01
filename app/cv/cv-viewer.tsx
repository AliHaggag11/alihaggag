"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

export function CVViewer() {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function renderPDF() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument({ url: "/Ali-Haggag-CV.pdf" });
        const pdf = await loadingTask.promise;
        const images: string[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const scale = 2;
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport,
            canvas,
          }).promise;

          images.push(canvas.toDataURL("image/png"));
        }

        setPageImages(images);
      } catch (err) {
        console.error("Failed to load PDF:", err);
        setError("CV not available");
      }
    }

    renderPDF();
  }, []);

  if (error) {
    return (
      <div className="mt-10 text-center text-stone/60">
        <p>{error}</p>
      </div>
    );
  }

  if (pageImages.length === 0) {
    return (
      <div className="mt-10 text-center text-stone/60">
        <p className="font-mono text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="mt-10 space-y-8">
      {pageImages.map((src, index) => (
        <Reveal key={index}>
          <div className="border border-copper/30 bg-white">
            <img
              src={src}
              alt={`CV page ${index + 1}`}
              className="w-full"
              style={{ aspectRatio: "210 / 297" }}
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
