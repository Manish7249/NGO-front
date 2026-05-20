// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bgImage from '../../assets/landingPageImage/bg-image.png'; // Tera wahi image path

// const OTPVerification = () => {
//     const [otp, setOtp] = useState(new Array(6).fill(""));
//     const [timer, setTimer] = useState(152); // 02:32 minutes = 152 seconds
//     const inputRefs = useRef([]);
//     const navigate = useNavigate();

//     // Timer Logic
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     // Seconds ko MM:SS format me convert karne ke liye
//     const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     // OTP Input handle logic (Auto-focus next)
//     const handleChange = (element, index) => {
//         if (isNaN(element.value)) return false;
//         setOtp([...otp.map((d, idx) => (index === idx ? element.value : d))]);
//         if (element.value !== "" && index < 5) {
//             inputRefs.current[index + 1].focus();
//         }
//     };

//     // Backspace handle logic
//     const handleKeyDown = (e, index) => {
//         if (e.key === "Backspace" && otp[index] === "" && index > 0) {
//             inputRefs.current[index - 1].focus();
//         }
//     };

//     const handleVerify = (e) => {
//         e.preventDefault();
//         const finalOtp = otp.join("");
//         console.log("Verifying OTP:", finalOtp);
//     };

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
            
//             {/* 1. BACKGROUND IMAGE - Matching NGOLogin Design */}
//             <div className="absolute inset-0 z-0">
//                 <img 
//                     src={bgImage} 
//                     className="w-full h-full" 
//                     alt="bg" 
//                 />
//                 {/* Soft overlay matching NGOLogin */}
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
//             </div>

//             {/* 2. OTP CARD - Matching NGOLogin's responsive padding, border, and shadow */}
//             <div className="relative z-10 w-full max-w-[480px] mx-4 bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-12">
                
//                 {/* Heading - Responsive text size */}
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
//                     OTP Verification
//                 </h1>
                
//                 <p className="text-gray-500 font-medium text-center mb-6 md:mb-8 text-sm md:text-base max-w-[300px]">
//                     Enter the code from the sms <br /> we sent to your email
//                 </p>

//                 {/* TIMER - Keeping original text logic */}
//                 <div className="text-[#3ec327] font-bold text-xl md:text-2xl mb-2 md:mb-4">
//                     {formatTime(timer)}
//                 </div>

//                 {/* OTP INPUTS - Making them responsive too */}
//                 <div className="flex gap-2 md:gap-3 mb-6 md:mb-8">
//                     {otp.map((data, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             maxLength="1"
//                             ref={(el) => (inputRefs.current[index] = el)}
//                             value={data}
//                             onChange={(e) => handleChange(e.target, index)}
//                             onKeyDown={(e) => handleKeyDown(e, index)}
//                             className="w-10 h-12 md:w-12 md:h-14 bg-white border border-green-500 rounded-lg text-center text-xl font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
//                         />
//                     ))}
//                 </div>

//                 {/* RESEND LINK - Original logic */}
//                 <p className="text-gray-800 font-semibold text-xs md:text-sm mb-8 md:mb-10">
//                     I didn't receive any code. <button className="text-[#3ec327] font-bold hover:underline">RESEND</button>
//                 </p>

//                 {/* VERIFY BUTTON - Matching NGOLogin Button Style and Responsiveness */}
//                 <button 
//                     onClick={handleVerify}
//                     className="w-full max-w-[370px] py-2.5 md:py-3 bg-[#3ec327] hover:bg-[#35a822] text-gray-800 font-bold rounded-lg text-base md:text-lg shadow-md transition-all active:scale-95 mt-2"
//                 >
//                     Verify
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default OTPVerification;










import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/landingPageImage/bg-image.png'; 

const OTPVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(152); 
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (index === idx ? element.value : d))]);
        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // --- UPDATED LOGIC ---
    const handleVerify = (e) => {
        e.preventDefault();
        const finalOtp = otp.join("");
        
        // 1. Check karo ki 6 digit bhare hain ya nahi
        if (finalOtp.length === 6) {
            console.log("Verifying OTP:", finalOtp);
            // 2. NGO Dashboard par bhej do
            navigate('/ngo'); 
        } else {
            alert("Please enter a valid 6-digit OTP");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
            
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    className="w-full h-full object-cover" 
                    alt="bg" 
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-[480px] mx-4 bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-12">
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
                    OTP Verification
                </h1>
                
                <p className="text-gray-500 font-medium text-center mb-6 md:mb-8 text-sm md:text-base max-w-[300px]">
                    Enter the code from the sms <br /> we sent to your email
                </p>

                <div className="text-[#3ec327] font-bold text-xl md:text-2xl mb-2 md:mb-4">
                    {formatTime(timer)}
                </div>

                <div className="flex gap-2 md:gap-3 mb-6 md:mb-8">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={data}
                            onChange={(e) => handleChange(e.target, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-10 h-12 md:w-12 md:h-14 bg-white border border-green-500 rounded-lg text-center text-xl font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                        />
                    ))}
                </div>

                <p className="text-gray-800 font-semibold text-xs md:text-sm mb-8 md:mb-10">
                    I didn't receive any code. <button className="text-[#3ec327] font-bold hover:underline">RESEND</button>
                </p>

                {/* Redirect logic triggered on click */}
                <button 
                    onClick={handleVerify}
                    className="w-full max-w-[370px] py-2.5 md:py-3 bg-[#3ec327] hover:bg-[#35a822] text-gray-800 font-bold rounded-lg text-base md:text-lg shadow-md transition-all active:scale-95 mt-2"
                >
                    Verify
                </button>

            </div>
        </div>
    );
};

export default OTPVerification;
