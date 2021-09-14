export const componentVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  },
};

export const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};