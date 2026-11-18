import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="container">
        <span className="section__index">06</span>
        <h2 className="contact__title">사용자의 필요를 이해하고, 더 나은 서비스를 함께 만들어가겠습니다.</h2>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}>
            <span>Email</span>
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            {profile.github.replace('https://', '')}
          </a>
        </div>
        <p className="contact__copy">© 2026 {profile.nameEn}. Built with React + Vite.</p>
      </div>
    </footer>
  )
}
