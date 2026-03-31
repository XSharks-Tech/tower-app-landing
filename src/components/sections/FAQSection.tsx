import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem a Tower App é ideal?",
    a: "Para donos, sócios e gestores de negócios de Alimentos & Bebidas que querem entender o real CMV, ver o real lucro e precificar com mais clareza e segurança.",
  },
  {
    q: "Consigo entender meu real CMV com a Tower?",
    a: "Sim. A Tower entrega uma visão detalhada do custo real dos seus produtos, considerando beneficiamento, perdas, porcionamento e todos os fatores que impactam o CMV.",
  },
  {
    q: "A aplicação ajuda no controle de perdas e beneficiamento?",
    a: "Sim. Você acompanha rendimentos, perdas e transformações de insumos de forma organizada e com clareza visual.",
  },
  {
    q: "O Bot AI já ajuda no início?",
    a: "Sim. O Bot AI acelera a montagem da sua base, apoia o cadastro de produtos e insumos, e torna a experiência mais ágil desde o primeiro acesso.",
  },
  {
    q: "O valor de R$149 é promocional de lançamento?",
    a: "Sim. Esse é o valor exclusivo da oferta de lançamento do Plano Essencial. Aproveite para garantir acesso com essa condição especial.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding relative">
      <div className="section-container max-w-2xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="headline-lg">Perguntas frequentes</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-[hsl(var(--glass-border)/0.2)] data-[state=open]:border-[hsl(var(--glow-cyan)/0.2)]"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
