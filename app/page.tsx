import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teaching from "@/components/Teaching";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Teaching />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
