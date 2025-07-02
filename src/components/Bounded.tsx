import React from "react";

export default function Bounded({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto pt-8 md:pt-16 px-4 md:py-8">
      {children}
    </section>
  );
}
