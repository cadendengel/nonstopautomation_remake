import { useEffect, useState } from "react";

export function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[index];

  return (
    <section className="testimonial-card">
      <p className="chip">5.0 {item.industry}</p>
      <blockquote>"{item.quote}"</blockquote>
      <p className="author">{item.name} · {item.company}</p>
      <p className="result-chip">{item.result}</p>
      <div className="dots">
        {items.map((_, dot) => (
          <button
            key={dot}
            className={`dot ${dot === index ? "active" : ""}`}
            onClick={() => setIndex(dot)}
            aria-label={`Go to testimonial ${dot + 1}`}
          />
        ))}
      </div>
    </section>
  );
}