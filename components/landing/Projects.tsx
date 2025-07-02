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
    technologies: [
      { name: 'React.js', icon: '/img/react.png' },
      { name: 'Tailwind CSS', icon: '/img/tailwind.png' },
      { name: 'Node.js', icon: '/img/node.png' },
      { name: 'Next', icon: '/img/nextjs.svg' },
    ],
    link: 'https://fia.uca.edu.sv/pensum/login',
    picture: '/img/pensum.webp',
  },
  {
    title: 'CRM-Bot',
    description:
      'Customer relationship management system for a digital agency.',
    technologies: [
      { name: 'Next.js', icon: '/img/nextjs.svg' },
      { name: 'Node.js', icon: '/img/node.png' },
      { name: 'Tailwind CSS', icon: '/img/tailwind.png' },
      { name: 'Shadcn', icon: '/img/shadcn.png' },
    ],
    link: 'https://crm.digital-dreams.dev/',
    picture: '/img/crmbot.png',
  },
  {
    title: 'Pokemon UI',
    description:
      'Interface that consumes the public Pokémon API to display a detailed gallery of Pokémon. It shows stats, abilities, types, and allows dynamic navigation between different creatures.',
    technologies: [
      { name: 'React.js', icon: '/img/react.png' },
      { name: 'Node.js', icon: '/img/node.png' },
      { name: 'Tailwind CSS', icon: '/img/tailwind.png' },
      { name: 'Typescript', icon: '/img/typescript.svg.webp' },
    ],
    link: 'https://pokemon-front-virid.vercel.app/',
    picture: '/img/pokemon.png',
  },
  {
    title: 'Counter App',
    description:
      'Application that counts the length of an entered text and estimates the approximate reading time.',
    technologies: [
      { name: 'React.js', icon: '/img/react.png' },
      { name: 'Node.js', icon: '/img/node.png' },
      { name: 'CSS', icon: '/img/css-3.svg' },
      { name: 'Typescript', icon: '/img/typescript.svg.webp' },
    ],
    link: 'https://counter-app-one-blue.vercel.app/',
    picture: '/img/counterapp.png',
  },
  {
    title: 'Countries App',
    description:
      'Application that allows filtering countries by continent and viewing detailed information of the selected country, including population, capital, flag, and region.',
    technologies: [
      { name: 'React.js', icon: '/img/react.png' },
      { name: 'Node.js', icon: '/img/node.png' },
      { name: 'CSS', icon: '/img/css-3.svg' },
      { name: 'Typescript', icon: '/img/typescript.svg.webp' },
    ],
    link: 'https://countries-blush-nine.vercel.app/',
    picture: '/img/countries.png',
  },
  {
    title: 'Dilujo',
    description:
      'Online jewelry store that offers an elegant experience to explore and discover unique products by category, style, and more. It includes features such as shopping cart, detailed product view, and full admin panel management.',
    technologies: [
      { name: 'Next.js', icon: '/img/nextjs.svg' },
      { name: 'Tailwind.js', icon: '/img/tailwind.png' },
      { name: 'Ant Design', icon: '/img/ant.png' },
      { name: 'Typescript', icon: '/img/typescript.svg.webp' },
    ],
    link: 'https://dilujo-web.vercel.app/en',
    picture: '/img/dilujo.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full ">
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
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-1 bg-primary/10 rounded w-8 h-8 relative"
                      title={tech.name}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild>
                  <Link href={project.link}>View Demo</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
