import { Link } from "react-router-dom";
import {
  caseStudyHighlights,
  heroMetrics,
  integrations,
  stackCards,
  testimonials,
  timelineSteps,
} from "../content/siteContent";
import { Reveal } from "../components/Reveal";
import { TestimonialCarousel } from "../components/TestimonialCarousel";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="container hero-grid">
          <Reveal>
            <p className="eyebrow">AI Automation For Service Businesses</p>
            <h1>Complete automation for service businesses.</h1>
            <p className="lead">
              AI that handles every customer touchpoint: calls, chat, booking, follow-up, and CRM updates.
            </p>
            <div className="button-row">
              <Link to="/" className="cta-button">Book a demo</Link>
              <Link to="/" className="ghost-button">Try AI</Link>
              <Link to="/pricing" className="ghost-button">Models & Pricing</Link>
            </div>
            <div className="metric-row">
              {heroMetrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="hero-panel">
            <h3>Direct Connections</h3>
            <p>Seamlessly connect with your existing tools and workflows.</p>
            <div className="integration-cloud">
              {integrations.map((item) => (
                <span key={item} className="integration-chip">{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <p className="eyebrow">Everything you need - one stack</p>
          <h2>One platform, complete customer flow.</h2>
        </Reveal>
        <div className="card-grid">
          {stackCards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container two-col">
          <Reveal>
            <p className="eyebrow">Trusted by Service Businesses</p>
            <h2>Verified teams seeing measurable gains.</h2>
            <p>
              Ratings, booking velocity, and response-time improvements are what teams report most after launch.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <p className="eyebrow">Real Results from Real Businesses</p>
          <h2>Stories of transformation.</h2>
          <p>Each case study includes call examples, screenshots, and concrete outcomes.</p>
        </Reveal>
        <div className="highlight-grid">
          {caseStudyHighlights.map((item, idx) => (
            <Reveal className="highlight-card" key={item} delay={idx * 90}>
              <h3>{item}</h3>
              <p>Practical examples your team can adapt immediately.</p>
            </Reveal>
          ))}
        </div>
        <div className="center-row">
          <Link to="/case-studies" className="cta-button">View all case studies</Link>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Go live in 14 business days</p>
            <h2>Shadow mode to full coverage, in three steps.</h2>
          </Reveal>
          <div className="timeline-grid">
            {timelineSteps.map((step, idx) => (
              <Reveal key={step.title} className="timeline-card" delay={idx * 90}>
                <p className="timeline-step">{step.step}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}