import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DC
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          {/* <Link
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link> */}
        </nav>
        {/* <Button asChild>
          <Link href="#contact">Hire Me</Link>
        </Button> */}
      </div>
    </header>
  );
}
