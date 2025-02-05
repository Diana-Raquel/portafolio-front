import { Github, Gitlab, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Diana Cruz. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/Diana-Raquel/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/diana-cruzx2/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://gitlab.com/Diana-Raquel"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Gitlab className="h-6 w-6" />
            <span className="sr-only">GitLab</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
