import { motion } from "framer-motion";

const StepCard = ({ step, index }) => {
  const isRight = index % 2 === 0;

  return (
    <motion.section
      className="relative w-full flex justify-center"
      initial={{ opacity: 0.5, filter: "blur(2px)", y: 40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="hidden md:flex w-full max-w-5xl">

        {/* Left Text */}
        <div className={`w-1/2 justify-end pr-6 ${!isRight ? "flex" : "invisible"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm text-right"
          >
            <p className="text-sm text-[#a6a6c3]">{step.title}</p>
            <p className="text-xl font-semibold text-white">{step.description}</p>
          </motion.div>
        </div>

        {/* Step number & Timeline */}
        <div className="flex flex-col items-center z-10 px-4 relative">
          <div className="text-white font-bold px-4 py-2 rounded-full z-10">{step.number}</div>
          {index !== 3 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-[2px] h-48 bg-gray-400"
            />
          )}
        </div>

        {/* Right Text */}
        <div className={`w-1/2 justify-start pl-6 ${isRight ? "flex" : "invisible"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm text-left"
          >
            <p className="text-sm text-[#a6a6c3]">{step.title}</p>
            <p className="text-xl font-semibold text-white">{step.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex w-full mt-4 justify-center">
        <div className="flex flex-col items-center z-10 px-4 relative">
          <div className="text-white font-bold px-4 py-2 rounded-full z-10">{step.number}</div>
          {index !== 3 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-[2px] h-48 bg-gray-400"
            />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="ml-4 max-w-sm"
        >
          <p className="text-sm text-[#a6a6c3]">{step.title}</p>
          <p className="text-lg font-semibold text-white">{step.description}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StepCard;
