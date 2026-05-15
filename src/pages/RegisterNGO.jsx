import { useState } from 'react';
import Stepper from '../components/Stepper';
import BasicDetails from '../components/Steps/BasicDetails';
import LegalInfo from '../components/Steps/LegalInfo';
import BankDetails from '../components/Steps/BankDetails';
import Payment from '../components/Steps/Payment';
import ProfileSetup from '../components/Steps/ProfileSetup';
import Preview from '../components/Steps/Preview';

const RegisterNGO = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3 md:p-6 font-sans">
      <div className="bg-white w-full max-w-2xl rounded-3xl md:rounded-[40px] shadow-2xl p-6 md:p-10 relative">
        
        <h1 className="text-center text-lg md:text-xl font-bold text-gray-900 mb-8 md:mb-12">
          Register Your NGO
        </h1>

        <Stepper currentStep={currentStep} />

        <div className="mt-10">
          {currentStep === 1 && <BasicDetails onNext={handleNext} />}

          {currentStep === 2 && <LegalInfo onNext={handleNext} onBack={handleBack} />}

          {currentStep === 3 && <BankDetails onNext={handleNext} onBack={handleBack} />}

          {currentStep === 4 && <Payment onNext={handleNext} />}

          {/* STEP 5 AB READY HAI */}
          {currentStep === 5 && (
             <ProfileSetup onNext={handleNext} onBack={handleBack} />
          )}

          {currentStep === 6 && (
            <Preview onBack={handleBack} onSubmit={() => alert("Registration Submitted!")} />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default RegisterNGO;
