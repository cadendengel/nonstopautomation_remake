import { Reveal } from "../components/Reveal";

const legalContent = {
  terms: {
    title: "Terms & Conditions",
    blocks: [
      "This demo version is a customizable site framework. Replace this placeholder legal text with your finalized legal language before production use.",
      "Use of this website and related services is subject to your final business policies, contract terms, and jurisdiction-specific requirements.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    blocks: [
      "This placeholder policy should be replaced with your official privacy policy before publication.",
      "Define what data you collect, why it is collected, how it is used, and how users may request deletion or updates.",
    ],
  },
};

export function LegalPage({ kind }) {
  const entry = legalContent[kind] ?? legalContent.privacy;

  return (
    <section className="section container page-top legal">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1>{entry.title}</h1>
      </Reveal>
      {entry.blocks.map((block, idx) => (
        <Reveal key={block} delay={idx * 90}>
          <p>{block}</p>
        </Reveal>
      ))}
    </section>
  );
}