import React from 'react';
import Header from '../Header';
import TimeLine from './TimeLine';
import Button from '../buttons/Button';

const ProcessSection = () => {
  return (
    <>
      <Header
        title={<>Become a <span className="text-[#80397b]">Abcd Pro</span> in sec...</>}
        subtitle="🚀 Sign up. Fund. Trade."
        planTitle="Our Process"
      />
      <TimeLine />
    </>
  );
};

export default ProcessSection;
