import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white uppercase italic" aria-label="Cognenta — Go to homepage">
              Cognenta
            </Link>
            <p className="mt-4 text-medium-grey max-w-sm">
              Built for B2B SaaS and high-ticket agency founders running a setter-to-AE motion. 
              Eliminate the ops slog. Recover pipeline. Get your Sundays back.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li><Link to="/revenue-audit" className="hover:text-cyber-mint transition-colors duration-200">Revenue Audit</Link></li>
              <li><Link to="/integrations" className="hover:text-cyber-mint transition-colors duration-200">Integrations</Link></li>
              <li><Link to="/scaling-revenue-teams" className="hover:text-cyber-mint transition-colors duration-200">Scaling Teams</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li><Link to="/philosophy" className="hover:text-cyber-mint transition-colors duration-200">Philosophy</Link></li>
              <li><Link to="/faq" className="hover:text-cyber-mint transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/faq" className="hover:text-cyber-mint transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-medium-grey/50">
            © {new Date().getFullYear()} Cognenta. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-medium-grey/50">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
