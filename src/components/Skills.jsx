import Section from './Section.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" index="02" title="기술 스택" tone="alt">
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skills__group">
            <h3>
              {g.group}
              {g.note && <small className="skills__note">{g.note}</small>}
            </h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li key={item} className={`chip ${g.extra ? 'chip--extra' : ''}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
