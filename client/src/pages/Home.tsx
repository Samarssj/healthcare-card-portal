import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Modern healthcare portal landing page with integrated Google CX Agent Studio chat.
 * Sections: Header, Hero, Services, Features, Footer
 * Chat Widget: Integrated via Google Chat Messenger SDK in index.html
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Features Section */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />

      {/* Google Chat Messenger Widget */}
      {/* Configured in client/index.html with deployment credentials */}
      {/* The chat widget appears as a floating button at bottom-right */}
    </div>
  );
}
