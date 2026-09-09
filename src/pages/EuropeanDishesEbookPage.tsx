import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDF_URL = "/european-dishes-ebook.pdf";

const DownloadButton = ({ className = "" }: { className?: string }) => (
  <Button asChild size="lg" className={className}>
    <a href={PDF_URL} download="European-Dishes-Ebook.pdf">
      <Download className="mr-2 h-5 w-5" aria-hidden="true" />
      Download the European Dishes Ebook – Free PDF
    </a>
  </Button>
);

const EuropeanDishesEbookPage = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(700);
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    document.title = "European Dishes Ebook | Later Is Too Late";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Read and download European Dishes, a free open-access recipe ebook by the Erasmus+ project Later Is Too Late: Say No to Obesity Now.",
      );
  }, []);

  useEffect(() => {
    const resize = () => {
      const el = containerRef.current;
      if (el) setWidth(Math.min(el.clientWidth - 24, 900));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [fullscreen]);

  const goPrev = useCallback(
    () => setPageNumber((p) => Math.max(1, p - 1)),
    [],
  );
  const goNext = useCallback(
    () => setPageNumber((p) => Math.min(numPages || 1, p + 1)),
    [numPages],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
      setFullscreen(true);
    } else {
      await document.exitFullscreen?.();
      setFullscreen(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gradient">
            European Dishes Ebook
          </h1>
          <p className="mt-3 text-muted-foreground">
            Free open educational resource — 68 pages of traditional recipes
            from France, Malta, Romania and Türkiye.
          </p>
        </header>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <p className="text-foreground/90 leading-relaxed">
            European Dishes is an educational open-access publication created
            through the Erasmus+ small-scale partnership project “Later Is Too
            Late: Say No to Obesity Now”. Students and teachers from France,
            Malta, Romania and Türkiye shared traditional recipes to promote
            intercultural learning and conversations about food, wellbeing and
            healthier choices.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Project No.: 2024-2-FR01-KA210-SCH-000279027
          </p>
          <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>
              Lycée Général et Technologique Paul Vincensini, Bastia, France
            </li>
            <li>Alternative Learning Programme (ALP) – Paola, Malta</li>
            <li>Palatul Copiilor Bacău, Romania</li>
            <li>Mehmet Özöncel Anadolu Lisesi, Adana, Türkiye</li>
          </ul>
        </section>

        <div className="flex justify-center my-8">
          <DownloadButton />
        </div>

        {/* Reader */}
        <div
          ref={containerRef}
          className="bg-muted/40 border border-border rounded-xl p-3 md:p-6 flex flex-col items-center"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (dx > 50) goPrev();
            if (dx < -50) goNext();
            touchStartX.current = null;
          }}
        >
          {failed ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground mb-4">
                The interactive reader could not load.
              </p>
              <Button asChild variant="outline">
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  Open PDF
                </a>
              </Button>
            </div>
          ) : (
            <>
              <Document
                file={PDF_URL}
                onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                onLoadError={() => setFailed(true)}
                loading={
                  <div className="py-24 text-muted-foreground">
                    Loading ebook…
                  </div>
                }
                className="flex justify-center"
              >
                <Page
                  pageNumber={pageNumber}
                  width={width * scale}
                  renderAnnotationLayer={false}
                  className="shadow-lg rounded-md overflow-hidden bg-white"
                />
              </Document>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={goPrev}
                  disabled={pageNumber <= 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" aria-hidden="true" />
                  Previous
                </Button>
                <span
                  className="px-3 text-sm font-medium"
                  aria-live="polite"
                >
                  Page {pageNumber} of {numPages || "…"}
                </span>
                <Button
                  variant="outline"
                  onClick={goNext}
                  disabled={!numPages || pageNumber >= numPages}
                  aria-label="Next page"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Zoom out"
                  onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
                >
                  <ZoomOut className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Zoom in"
                  onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
                >
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={fullscreen ? "Exit full screen" : "Full screen"}
                  onClick={toggleFullscreen}
                >
                  {fullscreen ? (
                    <Minimize2 className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                <Button variant="ghost" asChild>
                  <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Open PDF
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center my-8">
          <DownloadButton />
        </div>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">
            Open Educational Resource and Licence
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            Except where otherwise indicated, the text, recipe adaptations,
            layout and original project material in this publication are
            licensed under the{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Creative Commons Attribution 4.0 International
            </a>{" "}
            licence (CC BY 4.0).
          </p>
          <p className="mt-3 text-foreground/90 leading-relaxed">
            Users may share and adapt the licensed material, provided that
            appropriate credit is given, a link to the licence is included, and
            any changes are indicated.
          </p>
          <p className="mt-3 text-foreground/90 leading-relaxed">
            The Creative Commons licence does not apply to the European Union
            emblem, Erasmus+, eTwinning or partner logos, or to third-party
            photographs and material unless separately stated. These elements
            remain subject to their respective rights and conditions of use.
          </p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Co-funded by the European Union. Views and opinions expressed are,
            however, those of the author(s) only and do not necessarily reflect
            those of the European Union or the granting authority. Neither the
            European Union nor the granting authority can be held responsible
            for them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default EuropeanDishesEbookPage;
