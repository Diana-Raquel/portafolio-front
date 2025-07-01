import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    name: 'React',
    image: '/img/react.png',
    gradient: 'from-[#3b9bbd] to-[#276d84]', // azul oscuro react
  },
  {
    name: 'Next.js',
    image: '/img/nextjs.svg',
    gradient: 'from-[#1a1a1a] to-[#2e2e2e]',
  },
  {
    name: 'Tailwind CSS',
    image: '/img/tailwind.png',
    gradient: 'from-[#1994b7] to-[#0f6485]',
  },
  {
    name: 'TypeScript',
    image: '/img/typescript.svg.webp',
    gradient: 'from-[#245d9c] to-[#1c4471]',
  },
  {
    name: 'Git',
    image: '/img/git.svg',
    gradient: 'from-[#b83a2f] to-[#912a23]',
  },
  {
    name: 'CSS',
    image: '/img/css-3.svg',
    gradient: 'from-[#1d59c3] to-[#123e8a]',
  },
  {
    name: 'Axios',
    image: '/img/axios.png',
    gradient: 'from-[#6b3cd2] to-[#4b2a9b]',
  },
  {
    name: 'Node.js',
    image: '/img/node.png',
    gradient: 'from-[#2f6930] to-[#1e4620]',
  },
  {
    name: 'ShadCn',
    image: '/img/shadcn.png',
    gradient: 'from-[#0f0f0f] to-[#2b2b2b]',
  },
  {
    name: 'Ant Design',
    image: '/img/ant.png',
    gradient: 'from-[#1f71c3] to-[#15539e]',
  },
  {
    name: 'Vite',
    image: '/img/vite.png',
    gradient: 'from-[#cc7c16] to-[#a24c13]',
  },
  {
    name: 'ESLint',
    image: '/img/ESLint.svg.png',
    gradient: 'from-[#5d3ac4] to-[#3e248a]',
  },
  {
    name: 'Prettier',
    image: '/img/prettier.png',
    gradient: 'from-[#a87335] to-[#6c4b23]',
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
              className={`transition-transform transform hover:scale-105 hover:shadow-lg text-white`}
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            >
              <div
                className={`bg-gradient-to-r ${skill.gradient} rounded  bg-opacity-90 backdrop-brightness-150`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {skill.image && (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-18 h-12 object-contain bg-white rounded p-1"
                    />
                  )}
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
