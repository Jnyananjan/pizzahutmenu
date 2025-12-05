export default function Footer() {
  return (
    <footer className="bg-secondary mt-16 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>123 Restaurant Street, Food City, FC 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@restaurant.com" className="hover:text-primary transition-colors">
                    info@restaurant.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Monday - Friday:</span> 11:00 AM - 11:00 PM
              </p>
              <p>
                <span className="font-semibold text-foreground">Saturday:</span> 12:00 PM - 12:00 AM
              </p>
              <p>
                <span className="font-semibold text-foreground">Sunday:</span> 12:00 PM - 10:00 PM
              </p>
              <p className="text-sm mt-4 text-primary font-semibold">Closed on Mondays</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                title="Follow on Instagram"
              >
                <img src="/instagram.png" alt="Instagram" className="w-full h-full object-cover" />

              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                title="Follow on Facebook"
              >
                <img src="/facebook.png" alt="Facebook" className="w-full h-full object-cover" />

              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                title="Chat on WhatsApp"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-cover" />

              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
