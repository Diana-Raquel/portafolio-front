const skills = [
  {
    name: 'React',
    image: '/img/react.png',
    gradient: 'from-[#3b9bbd] to-[#276d84]',
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
    <section className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="bg-[#0f172a]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative flex flex-col items-center justify-center bg-gradient-to-r ${skill.gradient} rounded-md p-4 transition-transform transform hover:scale-105`}
              >
                <div className="p-2 rounded-md backdrop-blur-sm bg-white/10">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <span className="absolute bottom-1 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-xs text-white bg-black/70 px-2 py-0.5 rounded transition-all duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
