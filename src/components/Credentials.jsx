import Section from './Section.jsx'
import { certificates, education } from '../data/profile.js'

export default function Credentials() {
  return (
    <Section id="credentials" index="05" title="자격증 · 교육">
      <div className="credentials">
        <div>
          <h3 className="detail__label">자격증</h3>
          <ul className="timeline">
            {certificates.map((c) => (
              <li key={c.name}>
                <span className="timeline__date">{c.date}</span>
                <div>
                  <strong>{c.name}</strong>
                  <span>{c.issuer}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="detail__label">교육 · 학력</h3>
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.name}>
                <span className="timeline__date">{e.period}</span>
                <div>
                  <strong>{e.name}</strong>
                  <span>{e.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
