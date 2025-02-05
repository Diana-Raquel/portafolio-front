import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Diana Cruz</h1>
        <div className="flex justify-center pb-8">
          <Image
            src="/img/photocv.jpg"
            width={200}
            height={200}
            alt="Diana Cruz - Portafolio"
            className="rounded-full"
          />
        </div>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Frontend Web Developer
        </h2>
        <p className="text-lg mb-8">
          I craft responsive and performant web applications using modern
          technologies like React, Next.js, and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          {/* <Button variant="outline" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
