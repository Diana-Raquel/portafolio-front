import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    name: 'React',
    description: 'Used to build fast, modular, and dynamic user interfaces.',
  },
  {
    name: 'Next.js',
    description: 'Enables SSR, routing, and optimized web performance.',
  },
  {
    name: 'Tailwind CSS',
    description: 'Streamlines UI styling with utility-first CSS classes.',
  },
  {
    name: 'TypeScript',
    description: 'Improves code reliability with static typing in large apps.',
  },
  {
    name: 'Git',
    description: 'Manages code changes and team collaboration efficiently.',
  },
  {
    name: 'Responsive Design',
    description: 'Ensures consistent UX across mobile, tablet, and desktop.',
  },
  {
    name: 'CSS',
    description: 'Styles and visually structures web interfaces.',
  },
  {
    name: 'Axios',
    description: 'Handles API requests and async data fetching.',
  },
  {
    name: 'Node.js',
    description: 'Runs backend logic and APIs using JavaScript.',
  },
  {
    name: 'UI/UX',
    description: 'Shapes intuitive and accessible user experiences.',
  },
  {
    name: 'ShadCn',
    description: 'Provides accessible and customizable UI components.',
  },
  {
    name: 'Ant Design',
    description:
      'Delivers prebuilt UI components for dashboards and admin panels.',
  },
  {
    name: 'TanStack',
    description: 'Manages data, tables, and virtualization in complex UIs.',
  },
  {
    name: 'i18n',
    description: 'Enables language and regional adaptation in the application.',
  },
  { name: 'Vite', description: 'Fast bundler for modern frontend projects.' },
  {
    name: 'ESLint',
    description: 'Static code analysis to enforce quality and style.',
  },
  {
    name: 'Prettier',
    description: 'Code formatter to ensure consistency across the codebase.',
  },
  {
    name: 'Husky',
    description:
      'Automates checks and tasks using Git hooks before each commit or push.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
