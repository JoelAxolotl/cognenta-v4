import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Revenue Audit", href: "/revenue-audit" },
  { name: "Integrations", href: "/integrations" },
  { name: "Scaling Teams", href: "/scaling-revenue-teams" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2" aria-label="Cognenta — Go to homepage">
            <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">
              Cognenta
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyber-mint ${
                  location.pathname === link.href ? "text-cyber-mint" : "text-medium-grey"
                }`}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/revenue-audit"
              className="bg-cyber-mint text-obsidian px-5 py-2.5 rounded-full text-sm font-bold mint-glow-hover transition-all duration-200 cursor-pointer"
            >
              Book Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medium-grey hover:text-white cursor-pointer p-2 rounded-lg transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5"
          id="mobile-menu"
          role="menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-cyber-mint hover:bg-white/5 ${
                  location.pathname === link.href ? "text-cyber-mint" : "text-medium-grey"
                }`}
                role="menuitem"
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/revenue-audit"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-bold text-cyber-mint"
              role="menuitem"
            >
              Book Audit
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
