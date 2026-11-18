import Section from './Section.jsx'
import { strengths } from '../data/profile.js'

export default function Strengths() {
  return (
    <Section id="strengths" index="01" title="핵심 역량">
      <div className="strengths">
        {strengths.map((s, i) => (
          <article key={s.title} className="strength">
            <span className="strength__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="strength__evidence">{s.evidence}</span>
          </article>
        ))}
      </div>
    </Section>
  )
}
