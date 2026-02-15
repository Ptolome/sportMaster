import cn from 'classnames'
import styles from './Footer.module.css'

const Footer = ({className: className = ''}) => {
  return (
    <div className={cn(styles.footer, className)}>
      @2025 sport-master. All rights reserved.
    </div>
  )
}

export default Footer
