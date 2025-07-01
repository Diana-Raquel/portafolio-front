import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-center pb-8">
          <Image
            src="/img/photocv.jpg"
            width={200}
            height={70}
            alt="Diana Cruz - Portafolio"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          I&apos;m aDiana Cruz
        </h1>

        <h5 className="text-lg md:text-xl text-muted-foreground mb-8">
          Frontend Web Developer
        </h5>
        <p className="text-lg mb-8">
          I craft responsive and performant web applications using modern
          technologies like React, Next.js, and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="flex justify-center space-x-4 mt-4 md:mt-0 ">
            <Link
              href="https://github.com/Diana-Raquel/"
              className="h-12 w-12 bg-dark-100 p-2 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <svg className="h-16 w-16" aria-hidden="true">
                <use href="/sprite.svg#github" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/diana-cruzx2/"
              className="h-12 w-12 bg-blue-100 p-2 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <svg className="h-16 w-16" aria-hidden="true">
                <use href="/sprite.svg#linkedin" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
