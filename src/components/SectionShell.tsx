import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {(eyebrow || title) && (
        <div className="section-heading" data-reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
