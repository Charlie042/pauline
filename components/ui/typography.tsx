import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

const P: React.FC<Props> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </p>
  );
};

const Blockquote: React.FC<Props> = ({ className, children }) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
};

const InlineCode: React.FC<Props> = ({ className, children }) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
};

const Lead: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
};

const Large: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
};

const Muted: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}.
    </p>
  );
};

export { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode };
