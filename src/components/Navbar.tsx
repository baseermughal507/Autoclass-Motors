import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/cars", label: "Cars for Sale" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo */}
<Link to="/" className="flex items-center space-x-5 group">
  {/* ✅ Big logo */}
  <img
    src="/logo.png"
    alt="Autoclass Motors Logo"
    className="h-52 w-auto rounded-2xl group-hover:scale-110 transition-transform duration-300"
  />
  {/*
 <div>
  <h1 className="text-2xl font-bold tracking-tight">AUTOCLASS MOTORS</h1>
  <p className="text-sm text-gray-300 tracking-wider"></p>
</div>
    */}
</Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white">Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-black animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-white hover:text-accent hover:bg-accent/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">Get in Touch</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
