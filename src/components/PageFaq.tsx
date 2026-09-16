type FaqItem = {
  q: string;
  a: string;
};

export default function PageFaq({
  id = "faq",
  eyebrow,
  title,
  sub,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  sub: string;
  items: readonly FaqItem[];
}) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className="seo-faq" aria-labelledby={titleId}>
      <div className="seo-faq__inner">
        <header className="seo-faq__head">
          <p className="seo-faq__eyebrow">{eyebrow}</p>
          <h2 id={titleId} className="seo-faq__title">
            {title}
          </h2>
          <p className="seo-faq__sub">{sub}</p>
        </header>
        <div className="gv-faq">
          {items.map((item) => (
            <details key={item.q} className="gv-faq__item">
              <summary className="gv-faq__question">{item.q}</summary>
              <p className="gv-faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
