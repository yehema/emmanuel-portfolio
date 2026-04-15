import Navbar from './components/Navbar'
import Button from './components/Button'
import SectionTitle from './components/SectionTitle'
import SkillBar from './components/SkillBar'
import ProjectCard from './components/ProjectCard'
import Tag from './components/Tag'
import { profile, skills, projects, education } from './data/portfolioData'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>👋 Hello, I'm</span>
          <h1 className={styles.heroName}>{profile.name}</h1>
          <h2 className={styles.heroTitle}>{profile.title}</h2>
          <p className={styles.heroBio}>{profile.bio}</p>
          <div className={styles.heroCta}>
            <Button href="#projects" variant="primary">View My Work</Button>
            <Button href="#contact" variant="outline">Get In Touch</Button>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>8+</span>
              <span className={styles.statLabel}>Tools & Skills</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statLabel}>Years Learning</span>
            </div>
          </div>
        </div>
        <div className={styles.scroll}>
          <span />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.section} id="about">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <div className={styles.avatar}>
                <span>EE</span>
                <div className={styles.avatarRing} />
              </div>
            </div>
            <div className={styles.aboutRight}>
              <span className={styles.eyebrow}>About Me</span>
              <h2 className={styles.aboutHeading}>
                Passionate about data,<br />
                <span className={styles.gradientText}>driven by curiosity.</span>
              </h2>
              <p className={styles.aboutText}>{profile.bio}</p>
              <p className={styles.aboutText}>
                Currently pursuing my degree in Information Technology, I focus on extracting
                meaningful insights from complex datasets. I enjoy working with tools like
                Python, SQL, and Power BI to build dashboards and analytical pipelines
                that solve real problems.
              </p>
              <div className={styles.aboutMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📍</span>
                  <span>{profile.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>🎓</span>
                  <span>{education[0].degree}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📊</span>
                  <span>Data Analysis Enthusiast</span>
                </div>
              </div>
              <div className={styles.aboutBtns}>
                <Button href={profile.github} variant="outline" size="sm">GitHub</Button>
                <Button href={profile.linkedin} variant="ghost" size="sm">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="skills">
        <div className={styles.container}>
          <SectionTitle
            label="Expertise"
            title="Tools & Technologies"
            subtitle="The tools I use to analyze, visualize, and communicate data."
          />
          <div className={styles.skillsGrid}>
            {skills.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className={styles.section} id="projects">
        <div className={styles.container}>
          <SectionTitle
            label="Work"
            title="Featured Projects"
            subtitle="A selection of data projects I've built and analyzed."
          />
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="contact">
        <div className={styles.container}>
          <SectionTitle
            label="Contact"
            title="Let's Work Together"
            subtitle="Have a project or opportunity? I'd love to hear from you."
          />
          <div className={styles.contactCard}>
            <div className={styles.contactLeft}>
              <h3 className={styles.contactHeading}>Open to opportunities</h3>
              <p className={styles.contactText}>
                I'm currently looking for internships, freelance data projects, and
                collaborative opportunities. Whether you need data analysis, dashboards,
                or insights — let's talk.
              </p>
              <div className={styles.contactLinks}>
                <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                  <span>✉️</span> {profile.email}
                </a>
                <a href={profile.github} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  <span>💻</span> GitHub
                </a>
                <a href={profile.linkedin} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  <span>🔗</span> LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.contactRight}>
              <Button href={`mailto:${profile.email}`} variant="primary" size="md">
                Send Me an Email ↗
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            Built with React + Vite by <span className={styles.gradientText}>Emmanuel Edward</span>
          </p>
        </div>
      </footer>
    </>
  )
}
