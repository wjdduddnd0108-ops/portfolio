// 모든 섹션이 같은 제목 형식을 쓰도록 만든 공통 컴포넌트
export default function Section({ id, index, title, desc, children, tone }) {
  return (
    <section id={id} className={`section ${tone === 'alt' ? 'section--alt' : ''}`}>
      <div className="container">
        <div className="section__head">
          <span className="section__index">{index}</span>
          <h2 className="section__title">{title}</h2>
          {desc && <p className="section__desc">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
