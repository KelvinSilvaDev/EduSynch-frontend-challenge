import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col px-2 h-full gap-4 items-center align-middle justify-start pt-8">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </aside>
  );
};
