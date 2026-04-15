import styles from './Tag.module.css'

const Tag = ({ children, color }) => {
  return (
    <span
      className={styles.tag}
      style={color ? { borderColor: color + '44', color: color } : {}}
    >
      {children}
    </span>
  )
}

export default Tag
