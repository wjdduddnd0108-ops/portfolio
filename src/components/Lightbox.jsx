import { useEffect } from 'react'

export default function Lightbox({ images, index, onChange, onClose }) {
  const hasMany = images.length > 1
  const prev = () => onChange((index - 1 + images.length) % images.length)
  const next = () => onChange((index + 1) % images.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (hasMany && e.key === 'ArrowLeft') prev()
      if (hasMany && e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="이미지 크게 보기">
      <img src={images[index]} alt="" onClick={(e) => e.stopPropagation()} />
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="닫기">
        ✕
      </button>
      {hasMany && (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="이전 이미지">
            ‹
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="다음 이미지">
            ›
          </button>
          <span className="lightbox__count">
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  )
}
