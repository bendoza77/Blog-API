import { motion } from 'framer-motion'
import clsx from 'clsx'

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
}

const PageShell = ({ children, className = '' }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={clsx('space-y-10', className)}
  >
    {children}
  </motion.div>
)

export default PageShell
