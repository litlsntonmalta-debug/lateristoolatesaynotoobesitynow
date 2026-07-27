import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Archive,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  Search,
  Users,
} from "lucide-react";
import {
  dissemination,
  educationalOutputs,
  evidenceMatrix,
  mobilities,
  projectOverview,
  type MediaItem,
  type RepoEntry,
} from "@/data/repository";

const FileTag = ({ type }: { type?: string }) => (
  <Badge variant="secondary" className="uppercase text-[10px] tracking-wide">
    {type || "FILE"}
  </Badge>
);

const EntryCard = ({ entry }: { entry: RepoEntry }) => (
  <div id={entry.id} className="rounded-lg border border-border bg-card p-4 scroll-mt-24">
    <div className="flex items-start justify-between gap-3 flex-wrap">
      <div className="min-w-0">
        <h4 className="font-heading font-semibold text-foreground">{entry.title}</h4>
        {(entry.date || entry.partner) && (
          <p className="text-xs text-muted-foreground mt-0.5 flex flex-wrap gap-x-3 gap-y-1">
            {entry.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {entry.date}
              </span>
            )}
            {entry.partner && (
              <span className="inline-flex items-center gap-1">
                <Users className="h-3 w-3" /> {entry.partner}
              </span>
            )}
          </p>
        )}
      </div>
      {entry.externalLink && (
        <Button asChild size="sm" variant="outline">
          <a href={entry.externalLink} target="_blank" rel="noreferrer noopener">
            <ExternalLink className="h-3.5 w-3.5 mr-1" /> Open
          </a>
        </Button>
      )}
    </div>
    {entry.description && (
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{entry.description}</p>
    )}
    {entry.images && entry.images.length > 0 && (
      <div className={`mt-3 grid gap-2 ${entry.images.length > 1 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"}`}>
        {entry.images.map((img, i) => (
          <div key={i} className="rounded-md overflow-hidden border border-border bg-background">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full h-32 ${img.contain ? "object-contain p-1" : "object-cover"}`}
            />
          </div>
        ))}
      </div>
    )}
    {entry.documents && entry.documents.length > 0 && (
      <ul className="mt-3 space-y-1.5">
        {entry.documents.map((d, i) => (
          <li key={i} className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2">
            <span className="flex items-center gap-2 text-sm text-foreground min-w-0">
              <FileText className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate">{d.name}</span>
              <FileTag type={d.type} />
            </span>
            <Button size="sm" variant="ghost" disabled={!d.url}>
              <Download className="h-3.5 w-3.5 mr-1" /> Download
            </Button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const EntryList = ({ entries }: { entries: RepoEntry[] }) => (
  <div className="grid md:grid-cols-2 gap-3">
    {entries.map((e) => <EntryCard key={e.id} entry={e} />)}
  </div>
);

const Lightbox = ({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const item = items[index];
  if (!item) return null;
  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background">
        <div className="relative">
          <img src={item.src} alt={item.alt} className="w-full max-h-[80vh] object-contain bg-black/5" />
          {items.length > 1 && (
            <>
              <button
                onClick={onPrev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        {(item.caption || item.alt) && (
          <div className="p-3 text-sm text-muted-foreground border-t border-border">
            {item.caption || item.alt}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Gallery = ({ items }: { items: MediaItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!items.length) return <p className="text-sm text-muted-foreground">No media yet.</p>;
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group relative rounded-md overflow-hidden border border-border bg-background aspect-video"
          >
            <img src={m.src} alt={m.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            {m.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-[11px] p-1.5 text-left">
                {m.caption}
              </span>
            )}
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((openIndex - 1 + items.length) % items.length)}
          onNext={() => setOpenIndex((openIndex + 1) % items.length)}
        />
      )}
    </>
  );
};

const SectionHeading = ({ icon: Icon, title, subtitle, id }: { icon: any; title: string; subtitle?: string; id?: string }) => (
  <div id={id} className="scroll-mt-24 mb-4">
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">{title}</h2>
    </div>
    {subtitle && <p className="text-sm text-muted-foreground mt-1 ml-11">{subtitle}</p>}
  </div>
);

const RepositoryPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Educational Outputs",
    "Mobilities",
    "Learning Activities",
    "Documentation",
    "Dissemination",
    "Media",
    "Certificates",
  ];

  const matrixFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return evidenceMatrix.filter((r) => {
      const matchesQ =
        !q ||
        r.category.toLowerCase().includes(q) ||
        r.evidence.toLowerCase().includes(q) ||
        r.mobility.toLowerCase().includes(q);
      const matchesFilter =
        filter === "All" ||
        (filter === "Educational Outputs" && r.category === "Educational Output") ||
        (filter === "Mobilities" && r.category === "Mobility") ||
        (filter === "Dissemination" && (r.category === "Dissemination" || r.category === "Visibility" || r.category === "Printed")) ||
        (filter === "Certificates" && r.category === "Certificates") ||
        (filter === "Media" && (r.category === "Dissemination" && r.evidence.toLowerCase().includes("press"))) ||
        (filter === "Documentation" && r.category === "Mobility") ||
        (filter === "Learning Activities" && r.category === "Mobility");
      return matchesQ && matchesFilter;
    });
  }, [query, filter]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-section-alt min-h-screen">
      {/* Header / Overview */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold">
            <Archive className="h-4 w-4" /> Project Repository
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Erasmus+ Digital Archive
          </h1>
          <p className="text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Structured collection of project evidence, educational outputs, mobility activities,
            dissemination and supporting materials for the Erasmus+ National Agency, partners and stakeholders.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-background p-5">
              <h2 className="font-heading font-semibold text-foreground mb-3">Project Overview</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Title</dt>
                <dd className="font-medium">{projectOverview.title}</dd>
                <dt className="text-muted-foreground">Programme</dt>
                <dd>{projectOverview.programme}</dd>
                <dt className="text-muted-foreground">Project Code</dt>
                <dd className="font-mono text-xs">{projectOverview.code}</dd>
                <dt className="text-muted-foreground">Duration</dt>
                <dd>{projectOverview.duration}</dd>
                <dt className="text-muted-foreground">Coordinator</dt>
                <dd>{projectOverview.coordinator}</dd>
                <dt className="text-muted-foreground">Countries</dt>
                <dd>{projectOverview.countries.join(", ")}</dd>
                <dt className="text-muted-foreground">Mobilities</dt>
                <dd>{projectOverview.mobilityCount}</dd>
              </dl>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {projectOverview.description}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5">
              <h2 className="font-heading font-semibold text-foreground mb-3">Partner Organisations</h2>
              <ul className="space-y-3">
                {projectOverview.partners.map((p) => (
                  <li key={p.name} className="flex items-center gap-3">
                    <img src={p.logo} alt={`${p.name} logo`} className="h-10 w-10 object-contain bg-white rounded border border-border p-0.5" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.country} — {p.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Evidence Matrix */}
      <section className="container mx-auto px-4 py-10 max-w-6xl">
        <SectionHeading id="evidence" icon={Search} title="Evidence Matrix" subtitle="Search and jump directly to any piece of project evidence." />

        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search evidence, category or mobility…"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead>Mobility</TableHead>
                <TableHead className="text-right">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matrixFiltered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                    No matching evidence.
                  </TableCell>
                </TableRow>
              ) : (
                matrixFiltered.map((r, i) => (
                  <TableRow key={i}>
                    <TableCell><Badge variant="outline">{r.category}</Badge></TableCell>
                    <TableCell className="font-medium">{r.evidence}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{r.mobility}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost" onClick={() => scrollTo(r.target)}>
                        View <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Educational Outputs */}
      <section className="container mx-auto px-4 py-6 max-w-6xl">
        <SectionHeading id="educational-outputs" icon={BookOpen} title="Educational Outputs" subtitle="Learning materials, tools and deliverables produced by the partnership." />
        <Accordion type="multiple" defaultValue={["eo"]} className="rounded-lg border border-border bg-background">
          <AccordionItem value="eo" className="border-none">
            <AccordionTrigger className="px-4">All educational outputs ({educationalOutputs.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <EntryList entries={educationalOutputs} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Mobility Portfolio */}
      <section className="container mx-auto px-4 py-6 max-w-6xl">
        <SectionHeading id="mobility-portfolio" icon={MapPin} title="Mobility Portfolio" subtitle="One dossier per Learning, Teaching and Training Activity (LTTA)." />
        <Accordion type="multiple" className="space-y-3">
          {mobilities.map((m) => (
            <AccordionItem
              key={m.id}
              value={m.id}
              id={`mob-${m.id}`}
              className="scroll-mt-24 rounded-lg border border-border bg-background overflow-hidden"
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <img src={m.cover} alt="" className="hidden sm:block h-12 w-16 object-cover rounded" />
                  <div>
                    <div className="text-xs text-primary font-semibold">{m.number}</div>
                    <div className="font-heading font-semibold">{m.title}</div>
                    <div className="text-xs text-muted-foreground">{m.dates}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 space-y-4">
                {/* Overview */}
                <div className="rounded-md border border-border bg-card p-4">
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <dl className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <dt className="text-muted-foreground">Host</dt><dd>{m.host}</dd>
                    <dt className="text-muted-foreground">Location</dt><dd>{m.location}</dd>
                    <dt className="text-muted-foreground">Dates</dt><dd>{m.dates}</dd>
                    <dt className="text-muted-foreground">Participants</dt><dd>{m.participants}</dd>
                  </dl>
                  <p className="text-sm text-muted-foreground mt-3">{m.summary}</p>
                </div>

                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="prog" className="rounded-md border border-border bg-card">
                    <AccordionTrigger className="px-4">Programme & Schedule</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-1.5">
                        {m.programme.map((p, i) => (
                          <li key={i} className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2">
                            <span className="flex items-center gap-2 text-sm">
                              <FileText className="h-4 w-4 text-primary" />
                              {p.name}
                              <FileTag type={p.type} />
                            </span>
                            <Button size="sm" variant="ghost" disabled>
                              <Download className="h-3.5 w-3.5 mr-1" /> Download
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="learn" className="rounded-md border border-border bg-card">
                    <AccordionTrigger className="px-4">Learning Activities ({m.learningActivities.length})</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <EntryList entries={m.learningActivities} />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="doc" className="rounded-md border border-border bg-card">
                    <AccordionTrigger className="px-4">Project Documentation ({m.documentation.length})</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <EntryList entries={m.documentation} />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="gallery" className="rounded-md border border-border bg-card">
                    <AccordionTrigger className="px-4">Media Gallery ({m.gallery.length})</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <Gallery items={m.gallery} />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cert" className="rounded-md border border-border bg-card">
                    <AccordionTrigger className="px-4">Certificates & Supporting Materials</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <EntryList entries={m.certificates} />
                    </AccordionContent>
                  </AccordionItem>

                  {m.stats && (
                    <AccordionItem value="summary" className="rounded-md border border-border bg-card">
                      <AccordionTrigger className="px-4">Mobility Summary</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {m.stats.map((s) => (
                            <div key={s.label} className="rounded-md border border-border bg-background p-3 text-center">
                              <div className="text-2xl font-heading font-bold text-primary">{s.value}</div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Dissemination */}
      <section className="container mx-auto px-4 py-6 max-w-6xl">
        <SectionHeading id="dissemination" icon={Megaphone} title="Dissemination, Visibility & Communication" subtitle="Erasmus+ visibility, dissemination evidence and communication outputs." />
        <Accordion type="multiple" className="space-y-3">
          <AccordionItem value="online" id="diss-online" className="scroll-mt-24 rounded-lg border border-border bg-background">
            <AccordionTrigger className="px-4">Online Dissemination ({dissemination.online.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4"><EntryList entries={dissemination.online} /></AccordionContent>
          </AccordionItem>
          <AccordionItem value="printed" id="diss-printed" className="scroll-mt-24 rounded-lg border border-border bg-background">
            <AccordionTrigger className="px-4">Printed & Promotional Materials ({dissemination.printed.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4"><EntryList entries={dissemination.printed} /></AccordionContent>
          </AccordionItem>
          <AccordionItem value="visibility" id="diss-visibility" className="scroll-mt-24 rounded-lg border border-border bg-background">
            <AccordionTrigger className="px-4">Erasmus+ Visibility ({dissemination.visibility.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4"><EntryList entries={dissemination.visibility} /></AccordionContent>
          </AccordionItem>
          <AccordionItem value="media" id="diss-media" className="scroll-mt-24 rounded-lg border border-border bg-background">
            <AccordionTrigger className="px-4">Media & Publications ({dissemination.media.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4"><EntryList entries={dissemination.media} /></AccordionContent>
          </AccordionItem>
          <AccordionItem value="support" id="diss-support" className="scroll-mt-24 rounded-lg border border-border bg-background">
            <AccordionTrigger className="px-4">Supporting Materials ({dissemination.supporting.length})</AccordionTrigger>
            <AccordionContent className="px-4 pb-4"><EntryList entries={dissemination.supporting} /></AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Combined Media Gallery */}
      <section className="container mx-auto px-4 py-6 pb-16 max-w-6xl">
        <SectionHeading id="media" icon={ImageIcon} title="Combined Media Gallery" subtitle="All mobility photos in one lightbox — click any image to enlarge." />
        <div className="rounded-lg border border-border bg-background p-4">
          <Gallery items={mobilities.flatMap((m) => m.gallery)} />
        </div>
      </section>
    </div>
  );
};

export default RepositoryPage;
