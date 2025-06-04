import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ title, subtitle, planTitle, className = '', animated = true }) => {
  return (
    <div className={`w-full text-center mx-auto px-4 max-w-[500px] 

 ${className}`}>
      {animated ? ( 
        <>
        <span className='border-0 rounded-xl py-1 px-4 text-purple-200'>{planTitle}</span>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-semibold mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-sm text-[#a6a6c3]">{subtitle}</p>}
        </motion.div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-semibold mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-sm text-[#a6a6c3]">{subtitle}</p>}
        </>
      )}
    </div>
  );
};

export default Header;
