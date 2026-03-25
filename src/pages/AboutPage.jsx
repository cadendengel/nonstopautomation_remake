import { Reveal } from "../components/Reveal";

export function AboutPage() {
  return (
    <section className="section container page-top legal">
      <Reveal>
        <p className="eyebrow">About</p>
        <h1>Automation systems built for service operators.</h1>
      </Reveal>
      <Reveal delay={100}>
        <p>
          Nonstop Automation helps service businesses centralize voice, chat, follow-up, and CRM actions in one operating layer.
        </p>
        <p>
          The focus is practical rollout: integrate fast, launch safely, and improve with measurable KPIs instead of long implementation cycles.
        </p>
      </Reveal>
    </section>
  );
}