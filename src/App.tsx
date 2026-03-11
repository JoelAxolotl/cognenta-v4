import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import RevenueAudit from "./pages/RevenueAudit";
import Integrations from "./pages/Integrations";
import ScalingTeams from "./pages/ScalingTeams";
import Philosophy from "./pages/Philosophy";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/revenue-audit" element={<RevenueAudit />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/scaling-revenue-teams" element={<ScalingTeams />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
