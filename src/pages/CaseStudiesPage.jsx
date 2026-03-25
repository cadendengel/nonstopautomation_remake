import { caseStudies } from "../content/siteContent";
import { Reveal } from "../components/Reveal";

export function CaseStudiesPage() {
  return (
    <section className="section container page-top">
      <Reveal>
        <p className="eyebrow">Exclusive case studies</p>
        <h1>Real success stories from real businesses.</h1>
        <p className="lead compact">Audio, screenshots, and measurable outcome snapshots from live deployments.</p>
      </Reveal>

      <div className="case-grid">
        {caseStudies.map((study, idx) => (
          <Reveal key={study.title} className="case-card" delay={idx * 80}>
            <p className="chip">Case study</p>
            <h3>{study.title}</h3>
            <p>{study.summary}</p>
            <p className="result-chip">{study.metric}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}