import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchHasChanged from "./components/SearchHasChanged";
import Mission from "./components/Mission";
import Solution from "./components/Solution";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-white selection:text-black">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. "Search has changed" Section */}
      <SearchHasChanged />

      {/* 4. Mission Section */}
      <Mission />

      {/* 5. Solution Section */}
      <Solution />

      {/* 6. CTA Section */}
      <CTA />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
