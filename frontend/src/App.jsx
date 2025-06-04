import React from "react";
import Button from "./components/buttons/Button";
import PlansSection from "./components/Plans/PlansSection";
import ProcessSection from "./components/Process/ProcessSection";
import Payouts from "./components/Payout/Payouts";

const App = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-[#0b0b14] text-white overflow-hidden">

      {/* Background  */}
      <div className="absolute top-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#6940ff]/30 to-transparent rounded-full blur-3xl opacity-40 z-0" />

      {/* Main Sections */}
      <div className="relative z-20 w-full flex flex-col items-center px-4 py-8 mt-4">

        {/* Process Section */}
        <ProcessSection />

        
        <div className="mt-6">
          <Button>Open FREE Account</Button>
        </div>

        {/* Plan Section */}
        <PlansSection />

        {/* Payout Section  */}
        <Payouts />
      </div>
    </div>
  );
};

export default App;
