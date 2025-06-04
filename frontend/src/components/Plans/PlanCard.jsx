import React from 'react'
import { features, plans } from '../../utils/plans';

const PlanCard = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-[#0b0b14] text-white">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
    Compare your <span className="text-[#b682ff]">Abcd plan</span>
  </h2>

  {/* Container for Features and Plans */}
  <div className="flex flex-col lg:grid lg:grid-cols-[1fr_3fr] gap-6">
    
    {/* Features list */}
    <div className="grid grid-cols-1 gap-y-4 gap-x-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="text-sm font-medium text-white/80 whitespace-nowrap"
        >
          {feature}
        </div>
      ))}
    </div>

    {/* Plan cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {plans.map((plan, planIndex) => (
        <div
          key={planIndex}
          className="bg-gradient-to-b from-[#1a0828] to-[#0b0b14] p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {plan.title}
            </h3>
            <p className="text-sm text-center text-white/60 mb-6">
              {plan.description}
            </p>
            <div className="flex flex-col gap-4">
              {plan.data.map((item, i) => (
                <>
                <div key={i} className="text-center text-sm">
                  {item}
                </div>
                 <hr className="border-t border-white/20 " />
                </>
                
                
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
             <button className="px-6 bg-[#b682ff] text-white font-semibold py-2 rounded-md inline-block">
               Start Trading
            </button>
         </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default PlanCard
