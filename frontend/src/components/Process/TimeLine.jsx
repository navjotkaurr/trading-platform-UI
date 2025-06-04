import StepCard from './StepCard.jsx'
import { steps } from '../../utils/steps.js'
import { motion } from 'framer-motion'

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
        {steps.map((step, index) => (
          <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.1, // stagger animation based on index
          }}
          viewport={{ once: true, amount: 0.2 }} // triggers only once on scroll
        >
          <StepCard key={step.number} step={step} index={index}/>
          </motion.div>
            
        ))}
    </div>
  )
}

export default TimeLine
