import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Projects from '@/components/landing/Projects';
import Skills from '@/components/landing/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
