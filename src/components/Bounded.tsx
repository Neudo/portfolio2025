import React from "react";

export default function Bounded({ children }: { children: React.ReactNode }) {
  return <section className="container mx-auto">{children}</section>;
}
