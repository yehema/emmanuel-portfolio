import styles from './Button.module.css'

const Button = ({ children, href, onClick, variant = 'primary', size = 'md', ...props }) => {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
