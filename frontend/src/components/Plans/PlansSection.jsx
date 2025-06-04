import React from 'react';
import Header from '../Header';
import PlanCard from './PlanCard';

const PlansSection = () => {
  return (
    <section className="py-20 text-white text-center">
      <Header
        title={
          <>
            Start Small, <span className="text-[#80397b]">Scale</span> Big
          </>
        }
        subtitle="Flexible Deposits for Every Trader"
        planTitle="Compare Plans"
      />
      <PlanCard />
    </section>
  );
};

export default PlansSection;
