import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { motion } from "framer-motion";
import { content } from "@/content";

const ContactPage = () => {
  const guidanceCards = [
    {
      title: "A messy workflow",
      desc: "Too many steps, screens or decisions? I can help simplify the flow.",
    },
    {
      title: "A website or landing page",
      desc: "If your site looks okay but does not explain, guide or convert well.",
    },
    {
      title: "A dashboard or web app",
      desc: "For clearer UX, cleaner UI and product flows users can actually follow.",
    },
    {
      title: "A role or collaboration",
      desc: "For senior UI/UX thinking, design leadership or frontend-aware execution.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Contact />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4">
              What you can send me
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              No perfect brief needed. Send the messy version — I’ll help make sense of it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidanceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-muted/30 backdrop-blur-sm flex flex-col text-left"
              >
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
