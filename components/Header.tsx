import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold">
          frgomes
        </Link>
        <Nav />
      </div>
    </header>
  );
}