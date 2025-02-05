import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Pensum UCA',
    description:
      'Curriculum administration site of the José Simeón Cañas University (UCA)',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'Next.ui'],
    link: 'https://fia.uca.edu.sv/pensum/login',
    picture: '/img/pensum.webp',
  },
  {
    title: 'CRM-Bot',
    description:
      'Customer relationship management system for a digital agency.',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Shadcn'],
    link: 'https://crm.digital-dreams.dev/',
    picture: '/img/crmbot.png',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information app using OpenWeatherMap API.',
    technologies: ['React', 'Chart.js', 'API integration'],
    link: '#',
    picture: '/placeholder.svg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <Image
                  src={project.picture}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
