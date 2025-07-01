import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    name: 'React',
    image: '/img/react.png',
  },
  {
    name: 'Next.js',
    image: '/img/nextjs.svg',
  },
  {
    name: 'Tailwind CSS',
    image: '/img/tailwind.png',
  },
  {
    name: 'TypeScript',
    image: '/img/typescript.svg.webp',
  },
  {
    name: 'Git',
    image: '/img/git.svg',
  },
  {
    name: 'CSS',
    image: '/img/css-3.svg',
  },
  {
    name: 'Axios',
    image: '/img/axios.png',
  },
  {
    name: 'Node.js',
    image: '/img/node.png',
  },
  {
    name: 'ShadCn',
    image: '/img/shadcn.png',
  },
  {
    name: 'Ant Design',
    image: '/img/ant.png',
  },
  { name: 'Vite', image: '/img/vite.png' },
  {
    name: 'ESLint',
    image: '/img/ESLint.svg.png',
  },
  {
    name: 'Prettier',
    image: '/img/prettier.png',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {skill.image && (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-18 h-12 object-contain"
                  />
                )}
                <CardTitle className="text-xl">{skill.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
