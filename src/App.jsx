import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Strengths from './components/Strengths.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Growth from './components/Growth.jsx'
import Credentials from './components/Credentials.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'
import { projects } from './data/projects.js'

export default function App() {
  // 열려 있는 프로젝트 상세(모달)와 확대 이미지(라이트박스) 상태
  const [openProjectId, setOpenProjectId] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { images: [], index: 0 }

  const openProject = projects.find((p) => p.id === openProjectId)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Skills />
        <Projects projects={projects} onOpen={setOpenProjectId} />
        <Growth />
        <Credentials />
      </main>
      <Contact />

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProjectId(null)}
          onZoom={(images, index) => setLightbox({ images, index })}
        />
      )}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onChange={(index) => setLightbox({ ...lightbox, index })}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
