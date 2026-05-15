import React from 'react';

const Stepper = ({ currentStep }) => {
  const steps = ["Basic", "Legal", "Bank", "Payment", "Profile", "Preview"];
  
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto px-1">
      {steps.map((label, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-1 relative">
            {/* Circle: Mobile par thoda chhota */}
            <div className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs md:text-sm font-bold border transition-all 
              ${currentStep >= index + 1 ? 'bg-[#4CAF50] text-white border-black' : 'bg-white text-black border-black'}`}>
              {index + 1}
            </div>
            {/* Label: Mobile par bahut chhota taaki ek line mein aaye */}
            <span className={`text-[9px] md:text-xs font-bold ${currentStep >= index + 1 ? 'text-black' : 'text-black'}`}>
              {label}
            </span>
          </div>
          {/* Connector Line */}
          {index !== steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-1 mb-4 ${currentStep > index + 1 ? 'bg-[#4CAF50]' : 'bg-black'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
