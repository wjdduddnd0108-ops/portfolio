import { useEffect, useState } from 'react'
import { AiWorkflow, CoreFlow, DataModel, Verification } from './DetailSections.jsx'

export default function ProjectModal({ project, onClose, onZoom }) {
  const [tab, setTab] = useState(0)

  // ESC로 닫기 + 모달이 열린 동안 뒤 페이지 스크롤 막기
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const p = project
  const group = p.features[tab]

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={`${p.name} 상세`} onClick={onClose}>
      <div
        className={`modal__panel ${p.device === 'phone' ? 'modal__panel--phone' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        {/* 개요 */}
        <header className="detail__head">
          <div className="detail__badges">
            <span className="badge">{p.label}</span>
            {p.highlight && <span className="badge badge--launch">{p.highlight}</span>}
          </div>
          <h2>
            {p.name} <small>{p.subtitle}</small>
          </h2>
          <p className="detail__summary">{p.summary}</p>
          <dl className="detail__facts">
            <div>
              <dt>기간</dt>
              <dd>{p.period}</dd>
            </div>
            <div>
              <dt>인원</dt>
              <dd>{p.team}</dd>
            </div>
            <div>
              <dt>담당</dt>
              <dd>{p.myRole}</dd>
            </div>
          </dl>
          {p.facts && (
            <ul className="chips chips--sm detail__stats">
              {p.facts.map((f) => (
                <li key={f} className="chip chip--stat">
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="detail__links">
            {p.links.map((l) => (
              <a key={l.href} className="btn btn--ghost btn--sm" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </header>

        {/* 기획 · 데이터 연동 흐름 */}
        {p.planning && (
          <section className="detail__section">
            <h3 className="detail__title">{p.planning.section}</h3>
            {p.planning.title && <h4 className="flow__heading">{p.planning.title}</h4>}
            <ol className="flow">
              {p.planning.steps.map((s, i) => (
                <li key={s.label} className={`flow__step ${i === p.planning.steps.length - 1 ? 'flow__step--last' : ''}`}>
                  <span className="strength__num">{s.label}</span>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            {p.planning.excluded && (
              <div className="flow__excluded">
                <strong>{p.planning.excluded.title}</strong>
                <span className="flow__excluded-items">{p.planning.excluded.items}</span>
                <p>{p.planning.excluded.body}</p>
              </div>
            )}
          </section>
        )}

        <div className="detail__grid">
          <div>
            <h3 className="detail__label">사용 기술</h3>
            <ul className="chips chips--sm">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="detail__label">맡은 역할</h3>
            {typeof p.roles[0] === 'string' ? (
              <ul className="detail__roles">
                {p.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            ) : (
              <div className="role-groups">
                {p.roles.map((g) => (
                  <div key={g.group} className={`role-group ${g.muted ? 'role-group--muted' : ''}`}>
                    <h4>{g.group}</h4>
                    <ul className="detail__roles">
                      {g.items.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* AI 활용 방식 */}
        {p.aiWorkflow && <AiWorkflow data={p.aiWorkflow} onZoom={onZoom} />}

        {/* 핵심 기능 흐름 */}
        {p.coreFlow && <CoreFlow data={p.coreFlow} onZoom={onZoom} />}

        {/* 시험 시스템 흐름 */}
        {p.examFlow && (
          <section className="detail__section">
            <h3 className="detail__title">{p.examFlow.title}</h3>
            <ol className="exam-flow">
              {p.examFlow.steps.map((s, i) => (
                <li key={s.title} className={`exam-step ${s.image ? '' : 'exam-step--dark'}`}>
                  {s.image && (
                    <button type="button" className="exam-step__image" onClick={() => onZoom([s.image], 0)}>
                      <img src={s.image} alt={s.title} loading="lazy" />
                    </button>
                  )}
                  <div className="exam-step__text">
                    <span className="strength__num">
                      {String(i + 1).padStart(2, '0')} · {s.actor}
                    </span>
                    <h4>{s.title}</h4>
                    <ul>
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
            <h4 className="detail__label exam-flow__label">{p.examFlow.coreLabel}</h4>
            <ul className="chips chips--sm">
              {p.examFlow.core.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ERD */}
        {p.erd && (
          <section className="detail__section">
            <h3 className="detail__title">ERD 설계</h3>
            <button type="button" className="erd" onClick={() => onZoom([p.erd.image], 0)}>
              <img src={p.erd.image} alt="전체 ERD" loading="lazy" />
              <span className="erd__hint">클릭해서 크게 보기</span>
            </button>
            {p.erd.caption && <p className="erd__caption">{p.erd.caption}</p>}
            <div className="erd__points">
              {p.erd.points.map((pt, i) => (
                <article key={pt.title} className="erd__point">
                  <span className="strength__num">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{pt.title}</h4>
                  <p>{pt.body}</p>
                  <code>{pt.tag}</code>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 데이터 · 동기화 구조 */}
        {p.dataModel && <DataModel data={p.dataModel} onZoom={onZoom} />}

        {/* 트러블슈팅 */}
        {p.troubleshooting.length > 0 && (
          <section className="detail__section">
            <h3 className="detail__title">트러블슈팅</h3>
            <div className="troubles">
              {p.troubleshooting.map((t) => (
                <article key={t.title} className="trouble">
                  <h4>{t.title}</h4>
                  <ol className="trouble__steps">
                    <li data-step="문제">{t.problem}</li>
                    <li data-step="원인">{t.cause}</li>
                    <li data-step="해결">{t.solution}</li>
                    <li data-step="결과">{t.result}</li>
                  </ol>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 검증 */}
        {p.verification && <Verification data={p.verification} onZoom={onZoom} />}

        {/* 화면별 구현 */}
        <section className="detail__section">
          <h3 className="detail__title">화면별 구현</h3>
          <div className="tabs" role="tablist">
            {p.features.map((f, i) => (
              <button
                key={f.group}
                type="button"
                role="tab"
                aria-selected={tab === i}
                className={`tab ${tab === i ? 'tab--active' : ''}`}
                onClick={() => setTab(i)}
              >
                {f.group}
              </button>
            ))}
          </div>
          <div className="screens">
            {group.screens.map((s) => (
              <article key={s.title} className="screen">
                <div className="screen__images">
                  <button type="button" className="screen__main" onClick={() => onZoom(s.images, 0)}>
                    <img src={s.images[0]} alt={s.title} loading="lazy" />
                  </button>
                  {s.images.length > 1 && (
                    <div className="screen__thumbs">
                      {s.images.slice(1).map((img, i) => (
                        <button key={img} type="button" onClick={() => onZoom(s.images, i + 1)}>
                          <img src={img} alt={`${s.title} ${i + 2}`} loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="screen__text">
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 회고 */}
        <section className="detail__section">
          <h3 className="detail__title">회고</h3>
          {typeof p.retrospective === 'string' ? (
            <blockquote className="retro">{p.retrospective}</blockquote>
          ) : (
            <>
              <div className="retro__items">
                {p.retrospective.items.map((r, i) => (
                  <article key={r.title} className="retro__item">
                    <span className="strength__num">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{r.title}</h4>
                    <p>{r.body}</p>
                  </article>
                ))}
              </div>
              {p.retrospective.note && <p className="retro__note">{p.retrospective.note}</p>}
            </>
          )}
        </section>
      </div>
    </div>
  )
}
