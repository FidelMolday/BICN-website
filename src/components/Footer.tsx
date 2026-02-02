import { Phone, MapPin, Mail, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Baringo ICN Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
              <span className="text-lg font-semibold leading-tight">
                Baringo Integrated<br />Community Network
              </span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed max-w-md">
              Empowering communities to participate in community driven development initiatives through Digital Skills, Child Protection, Women's Rights, and Entrepreneurship.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+254712234923" 
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +254 (0)712 234923
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Baringo County, Kenya
              </li>
              <li>
                <a 
                  href="mailto:info@baringoicn.org" 
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@baringoicn.org
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/14SuzkknPfA/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lilian-sing-oei-08912654" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-background/60 text-sm text-center">
            © {currentYear} Baringo Integrated Community Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
