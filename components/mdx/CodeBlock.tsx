// components/mdx/CodeBlock.tsx
import React from "react";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-neutral-900 text-white p-4 rounded-md overflow-auto my-4 text-sm">
      <code>{children}</code>
    </pre>
  );
}
