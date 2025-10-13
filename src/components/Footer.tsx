import { Link } from "react-router-dom";
import { Car, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TikTokIcon from "./TikTokIcon"; 
import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AUTOCLASS MOTORS</h3>
                <p className="text-xs text-secondary">Drive Luxury. Drive Smart.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium used cars. Quality vehicles, unmatched standards
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-sm hover:text-accent transition-colors">
                  Cars for Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          {/* 3️ Email & Address (Middle Column) */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Email & Address</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm">info@autoclassmotors.com</span>
              </li>
              <li className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
              <Link
                to="/contact#map" // <-- Hash link to scroll to the map
                className="text-sm hover:text-accent transition-colors"
              >
                G-11 to G-13 Link Road, Main Service Road Near Srinagar Highway Islamabad, Pakistan
              </Link>
            </li>
            </ul>

            {/* Centered Social Icons */}
          <div className="flex justify-start gap-4 mt-4 ml-6">
            <a
              href="https://www.facebook.com/share/1GoYVs5zan/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/auto_classmotors?igsh=ejJ0aXo3Zm42em51"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <InstagramIcon />
            </a>
            {/* TikTok Lottie */}
            <a
              href="https://www.tiktok.com/@autoclass_motors?_t=ZS-90R6f3E9YGq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <TikTokIcon />
            </a>
          </div>

          </div>


          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold">M Jalal ud din Mughal</span>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+923345215337" className="hover:underline">
                      +92 334 5215337
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold">M Zain ul abi din Mughal</span>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+923365599155" className="hover:underline">
                      +92 336 5599155
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Autoclass Motors. All rights reserved.
          </p>
        </div>
           <div className="flex justify-center gap-4 mt-2 text-sm">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
