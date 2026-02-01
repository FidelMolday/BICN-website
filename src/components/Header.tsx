import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Organization Name */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Baringo ICN Logo" 
              className="h-10 md:h-14 w-auto"
            />
            <span className="hidden sm:block text-sm md:text-base font-semibold text-foreground leading-tight max-w-[180px]">
              Baringo Integrated Community Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA - Desktop */}
          <a 
            href="tel:+254712234923" 
            className="hidden lg:flex"
          >
            <Button variant="default" className="gap-2">
              <Phone className="h-4 w-4" />
              +254 712 234923
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      to={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                <a href="tel:+254712234923" className="mt-4">
                  <Button variant="default" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    +254 712 234923
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
