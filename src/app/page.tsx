import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b dark:bg-black transition-colors">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-16">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
