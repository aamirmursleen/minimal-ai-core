import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">AutomateLion</h3>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary">🇺🇸 USD</Badge>
            <Badge variant="secondary">United States</Badge>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xs text-muted-foreground text-center">
            This Website is not a part of Meta or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta in any way. META is a trademark of Meta Platforms, Inc.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 AutomateLion. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
