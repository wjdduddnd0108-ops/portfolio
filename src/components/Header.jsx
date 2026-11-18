import { profile } from '../data/profile.js'

const menu = [
  { href: '#strengths', label: '역량' },
  { href: '#skills', label: '기술' },
  { href: '#projects', label: '프로젝트' },
  { href: '#growth', label: '성장' },
  { href: '#credentials', label: '자격 · 교육' },
  { href: '#contact', label: '연락처' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          {profile.name}
          <span>Portfolio</span>
        </a>
        <nav className="header__nav" aria-label="섹션 이동">
          {menu.map((m) => (
            <a key={m.href} href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
