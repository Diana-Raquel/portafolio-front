import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { name: 'React', description: 'Building interactive UIs' },
  {
    name: 'Next.js',
    description: 'Server-side rendering and static site generation',
  },
  { name: 'Tailwind CSS', description: 'Rapid UI development' },
  { name: 'TypeScript', description: 'Type-safe JavaScript development' },
  { name: 'Git', description: 'Version control and collaboration' },
  {
    name: 'Responsive Design',
    description: 'Creating mobile-friendly layouts',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle>{skill.name}</CardTitle>
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
