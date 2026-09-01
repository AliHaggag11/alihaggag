import type { Metadata } from "next";
import { Folio } from "@/components/folio";
import { CVViewer } from "./cv-viewer";

export const metadata: Metadata = {
  title: "CV",
  description: "Ali Haggag — Software Engineer CV",
};

export default function CVPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Folio sheet="CV" />
      <CVViewer />
    </main>
  );
}
