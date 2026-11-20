// 프로젝트 상세(모달)에서 쓰는 추가 섹션들입니다.
// projects.js에 해당 데이터(aiWorkflow, coreFlow, dataModel, verification)가 있을 때만 표시됩니다.

const num = (i) => String(i + 1).padStart(2, '0')

// 번호 · 제목 · 설명 · 태그 카드 묶음 (ERD 설계 포인트와 같은 모양)
function PointCards({ points, cols }) {
  return (
    <div className={`erd__points ${cols === 2 ? 'erd__points--2' : ''}`}>
      {points.map((pt, i) => (
        <article key={pt.title} className="erd__point">
          <span className="strength__num">{num(i)}</span>
          <h4>{pt.title}</h4>
          {pt.body && <p>{pt.body}</p>}
          {pt.tag && <code>{pt.tag}</code>}
        </article>
      ))}
    </div>
  )
}

// 크게 보기 버튼이 달린 이미지
function ZoomImage({ src, alt, onZoom, light }) {
  return (
    <button type="button" className={`erd ${light ? 'erd--light' : ''}`} onClick={() => onZoom([src], 0)}>
      <img src={src} alt={alt} loading="lazy" />
      <span className="erd__hint">클릭해서 크게 보기</span>
    </button>
  )
}

export function AiWorkflow({ data, onZoom }) {
  return (
    <section className="detail__section">
      <h3 className="detail__title">{data.title}</h3>

      <h4 className="detail__label">도구별 역할</h4>
      <div className="ai-tools">
        {data.tools.map((t) => (
          <article key={t.name} className={`erd__point ${t.primary ? 'erd__point--primary' : ''}`}>
            <span className="strength__num">{t.role}</span>
            <h4>{t.name}</h4>
            <ul className="point__list">
              {t.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h4 className="detail__label detail__sub">작업 흐름</h4>
      <ol className="flow flow--4">
        {data.workflow.map((w, i) => (
          <li key={w} className={`flow__step ${i === data.workflow.length - 1 ? 'flow__step--last' : ''}`}>
            <span className="strength__num">{num(i)}</span>
            <p className="flow__strong">{w}</p>
          </li>
        ))}
      </ol>

      <h4 className="detail__label detail__sub">원칙</h4>
      <PointCards points={data.principles} />

      {data.images?.length > 0 && (
        <div className="detail__figures">
          {data.images.map((img, i) => (
            <figure key={img.src} className="detail__figure">
              <button
                type="button"
                className="erd erd--light"
                onClick={() => onZoom(data.images.map((x) => x.src), i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="erd__hint">클릭해서 크게 보기</span>
              </button>
              {img.caption && <figcaption className="erd__caption">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

export function CoreFlow({ data, onZoom }) {
  const srcs = data.images.map((img) => img.src)
  return (
    <section className="detail__section">
      <h3 className="detail__title">{data.title}</h3>
      <ol className="phone-strip">
        {data.images.map((img, i) => (
          <li key={img.src}>
            <button type="button" className="phone-shot" onClick={() => onZoom(srcs, i)}>
              <img src={img.src} alt={img.caption} loading="lazy" />
            </button>
            <span>{img.caption}</span>
          </li>
        ))}
      </ol>
      <PointCards points={data.steps} />
    </section>
  )
}

export function DataModel({ data, onZoom }) {
  return (
    <section className="detail__section">
      <h3 className="detail__title">{data.title}</h3>

      <div className="tree" role="figure" aria-label="Firestore 데이터 구조">
        {data.tree.map(([path, note]) => (
          <div key={path} className="tree__row">
            <span className="tree__path">{path}</span>
            <span className="tree__note">{note}</span>
          </div>
        ))}
      </div>

      <h4 className="detail__label detail__sub">설계 포인트</h4>
      <PointCards points={data.points} cols={2} />

      <h4 className="detail__label detail__sub">{data.login.title}</h4>
      <div className="split">
        <button type="button" className="phone-shot" onClick={() => onZoom([data.login.image], 0)}>
          <img src={data.login.image} alt="로그인 화면" loading="lazy" />
        </button>
        <div className="split__body">
          <ol className="flow flow--col">
            {data.login.steps.map((s, i) => (
              <li key={s.label} className={`flow__step ${i === data.login.steps.length - 1 ? 'flow__step--last' : ''}`}>
                <span className="strength__num">{s.label}</span>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          {data.offline && (
            <article className="erd__point">
              <span className="strength__num">{data.offline.title}</span>
              <p>{data.offline.body}</p>
              {data.offline.tag && <code>{data.offline.tag}</code>}
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export function Verification({ data, onZoom }) {
  return (
    <section className="detail__section">
      <h3 className="detail__title">{data.title}</h3>
      <ZoomImage src={data.summary} alt={`테스트 결과 요약: ${data.summaryCaption}`} onZoom={onZoom} light />
      {data.summaryCaption && <p className="erd__caption verify__caption">{data.summaryCaption}</p>}
      <div className="verify">
        <ul className="verify__list">
          {data.items.map((it, i) => (
            <li key={it.title} className="erd__point">
              <span className="strength__num">{num(i)}</span>
              <h4>{it.title}</h4>
              <p>{it.body}</p>
            </li>
          ))}
        </ul>
        {data.detail && (
          <figure className="verify__detail">
            <button type="button" className="screen__main" onClick={() => onZoom([data.detail], 0)}>
              <img src={data.detail} alt="테스트 상세 결과" loading="lazy" />
            </button>
            <figcaption>테스트 상세 — 클릭해서 크게 보기</figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
