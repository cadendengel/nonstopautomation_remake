import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function PricingPage() {
  return (
    <section className="section container page-top">
      <Reveal>
        <p className="eyebrow">Pricing</p>
        <h1>Simple pricing path for service businesses.</h1>
        <p className="lead compact">Start with core automation and expand with add-ons as results scale.</p>
      </Reveal>

      <div className="card-grid model-grid">
        <Reveal className="model-card" delay={0}>
          <p className="chip">Core</p>
          <h3>Atlas base system</h3>
          <p className="model-subtitle">Foundational stack</p>
          <p>Includes funnel setup, dashboard reporting, and integration support.</p>
          <ul>
            <li>Setup and onboarding</li>
            <li>Core automations</li>
            <li>Dedicated support</li>
          </ul>
        </Reveal>
        <Reveal className="model-card" delay={80}>
          <p className="chip">Add-ons</p>
          <h3>Voice and booking layers</h3>
          <p className="model-subtitle">Expand coverage</p>
          <p>Add inbound voice, outbound voice, or AI booking confirmation based on your needs.</p>
          <ul>
            <li>24/7 call handling</li>
            <li>Outbound campaign flows</li>
            <li>AI scheduling confirmation</li>
          </ul>
        </Reveal>
      </div>

      <Reveal className="cta-band">
        <h2>See the full model breakdown.</h2>
        <p>Compare Atlas, Inbound Voice AI, Outbound Voice AI, and Zeus side by side.</p>
        <div className="button-row">
          <Link to="/models" className="cta-button">View models</Link>
          <Link to="/" className="ghost-button">Book a demo</Link>
        </div>
      </Reveal>
    </section>
  );
}