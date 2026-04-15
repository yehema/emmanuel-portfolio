import styles from './SectionTitle.module.css'

const SectionTitle = ({ label, title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
