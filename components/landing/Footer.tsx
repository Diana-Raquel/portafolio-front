import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/Diana-Raquel/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GitHubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/diana-cruzx2/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedInIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
