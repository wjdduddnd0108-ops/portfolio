import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__role">{profile.role}</p>
        <h1 className="hero__title">
          {profile.headline.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero__intro">
          안녕하세요, <strong>{profile.name}</strong>입니다. {profile.intro}
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Projects</dt>
            <dd>프로젝트 3건 · 출시 앱 1개</dd>
          </div>
          <div>
            <dt>Certificates</dt>
            <dd>정보처리기사 · SQLD · ADsP</dd>
          </div>
          <div>
            <dt>Main Stack</dt>
            <dd>Java · Spring Boot · React · Oracle</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
