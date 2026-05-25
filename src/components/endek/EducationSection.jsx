import { Sparkles, Hand, Users, Leaf } from "lucide-react";

const items = [
  {
    icon: Hand,
    title: "Proses Pembuatan",
    text: "Kain Endek ditenun melalui teknik ikat pakan (weft ikat). Benang diikat dan dicelup berulang sebelum ditenun, menghasilkan motif yang khas dan tidak persis sama antar lembar.",
  },
  {
    icon: Sparkles,
    title: "Makna Filosofis",
    text: "Setiap motif merepresentasikan nilai budaya, kepercayaan, dan harmoni Tri Hita Karana — hubungan manusia dengan Tuhan, sesama, dan alam.",
  },
  {
    icon: Users,
    title: "Peran Perajin Lokal",
    text: "Perajin di Klungkung, Gianyar, Karangasem, dan Denpasar menjaga teknik tradisional ini secara turun-temurun, sekaligus berinovasi mengikuti zaman.",
  },
  {
    icon: Leaf,
    title: "Konservasi Digital",
    text: "Dokumentasi digital dan Generative AI membantu mendata motif, mengenali pola, serta memperkenalkan Endek ke generasi muda dan dunia internasional.",
  },
];

export const EducationSection = () => {
  return (
    <section id="edukasi" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-tenun opacity-[0.04] pointer-events-none" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-xs mb-3">Edukasi & Konservasi</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
            Mengenal Lebih Dalam Kain Endek Bali
          </h2>
          <div className="ornament-divider h-2 w-40 mx-auto mb-5" />
          <p className="text-muted-foreground leading-relaxed">
            Endek bukan sekadar kain — ia adalah arsip hidup budaya Bali yang menyatukan keterampilan tangan,
            spiritualitas, dan kreativitas masyarakatnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-gradient-card rounded-2xl p-7 shadow-card-soft border border-border hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-maroon flex items-center justify-center shadow-elegant">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
