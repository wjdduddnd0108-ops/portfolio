import Section from './Section.jsx'

export default function Projects({ projects, onOpen }) {
  return (
    <Section id="projects" index="03" title="프로젝트" desc="카드를 누르면 설계, 트러블슈팅, 화면별 구현 내용을 볼 수 있습니다.">
      <div className="projects">
        {projects.map((p) => (
          <button key={p.id} type="button" className="project-card" onClick={() => onOpen(p.id)}>
            <div className="project-card__thumb">
              <img src={p.cover} alt={`${p.name} 화면`} loading="lazy" />
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="badge">{p.label}</span>
                <span>{p.period}</span>
                <span>팀 {p.team}</span>
              </div>
              <h3>
                {p.name} <small>{p.subtitle}</small>
              </h3>
              <p>{p.summary}</p>
              <p className="project-card__role">
                <strong>담당</strong> {p.myRole}
              </p>
              <ul className="chips chips--sm">
                {p.stack.slice(0, 7).map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
                {p.stack.length > 7 && <li className="chip chip--more">+{p.stack.length - 7}</li>}
              </ul>
              <span className="project-card__more">자세히 보기 →</span>
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}
