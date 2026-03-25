import { Link } from "react-router-dom";
import { pricingModels } from "../content/siteContent";
import { Reveal } from "../components/Reveal";

export function ModelsPage() {
  return (
    <section className="section container page-top">
      <Reveal>
        <p className="eyebrow">Models</p>
        <h1>Choose the model stack that fits your operation.</h1>
        <p className="lead compact">
          Start with core automation, then layer inbound voice, outbound campaigns, and AI-confirmed booking.
        </p>
      </Reveal>

      <div className="card-grid model-grid">
        {pricingModels.map((model, idx) => (
          <Reveal className="model-card" key={model.name} delay={idx * 80}>
            <p className="chip">{model.tag}</p>
            <h3>{model.name}</h3>
            <p className="model-subtitle">{model.subtitle}</p>
            <p>{model.body}</p>
            <ul>
              {model.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="cta-band">
        <h2>Need help picking the rollout order?</h2>
        <p>We can recommend the right sequence for your team in a quick call.</p>
        <div className="button-row">
          <Link to="/" className="cta-button">Book a demo</Link>
          <Link to="/pricing" className="ghost-button">See pricing</Link>
        </div>
      </Reveal>
    </section>
  );
}
