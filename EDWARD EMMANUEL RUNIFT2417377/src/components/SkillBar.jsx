import { useEffect, useRef, useState } from 'react'
import styles from './SkillBar.module.css'

const SkillBar = ({ name, level, category }) => {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.skill} ref={ref}>
      <div className={styles.meta}>
        <div>
          <span className={styles.name}>{name}</span>
          <span className={styles.category}>{category}</span>
        </div>
        <span className={styles.level}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.bar}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default SkillBar
