import Section from './Section.jsx'
import { growth } from '../data/profile.js'

export default function Growth() {
  const projectCols = growth.columns.slice(1)
  return (
    <Section id="growth" index="04" title={growth.title} tone="alt">
      {/* 넓은 화면: 표 / 모바일: 항목별 카드 */}
      <table className="growth__table">
        <thead>
          <tr>
            {growth.columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {growth.rows.map(([name, ...values]) => (
            <tr key={name}>
              <th scope="row">{name}</th>
              {values.map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="growth__cards">
        {growth.rows.map(([name, ...values]) => (
          <article key={name} className="growth__card">
            <span className="strength__num">{name}</span>
            <dl>
              {values.map((v, i) => (
                <div key={i}>
                  <dt>{projectCols[i]}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <p className="growth__summary">{growth.summary}</p>
    </Section>
  )
}
