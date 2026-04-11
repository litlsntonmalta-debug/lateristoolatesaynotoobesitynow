import { Camera } from "lucide-react";

const GalleryPage = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">Gallery</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Photos and memories from our project activities and mobilities.
      </p>

      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Camera className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          Our first mobility in Adana, Türkiye takes place in September 2025. Photos and videos from all project activities will be shared here!
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          In the meantime, follow our project updates on{" "}
          <a
            href="https://www.facebook.com/share/1BGbyTAwg1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-medium"
          >
            Facebook
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default GalleryPage;
