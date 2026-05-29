import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Upload, X } from 'lucide-react';
import bgImage from '../../assets/landingPageImage/bg-image.png';
import streamLineImage from "../../assets/NGORegisterImage/streamline-sharp-color_view-document-files.png";

const DonorRegister = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  // --- Form & Files Combined State ---
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    photo: null,
    aadhar: null,
    pan: null,
  });

  const fields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Username', name: 'username', type: 'text' },
    { label: 'Email address', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Confirm password', name: 'confirmPassword', type: 'password' },
  ];

  // --- Handlers ---
  const handleFileChange = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [key]: file }));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // 1. Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!uploadedFiles.photo || !uploadedFiles.aadhar || !uploadedFiles.pan) {
      alert('Please upload all required documents (Photo, Aadhar, PAN)');
      return;
    }

    // 2. API Submission Logic
    try {
      // Note: File upload ke liye FormData use karna padta hai
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('username', formData.username);
      submissionData.append('email', formData.email);
      submissionData.append('password', formData.password);
      submissionData.append('photo', uploadedFiles.photo);
      submissionData.append('aadhar', uploadedFiles.aadhar);
      submissionData.append('pan', uploadedFiles.pan);

      const response = await fetch('http://localhost:3000/api/donor/register', {
        method: 'POST',
        body: submissionData, // JSON ki jagah FormData bhej rahe hain
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const data = await response.json();
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert('Registration Successful (Mock)'); // Testing ke liye
      setShowSuccess(true); 
    }
  };

  // --- Sub-Component for Upload Row ---
  const DocumentUploadRow = ({ title, docKey, fileData }) => {
    const fileInputRef = useRef(null);
    return (
      <div 
        onClick={() => fileInputRef.current.click()}
        className="flex items-center justify-between p-2.5 border border-gray-300 rounded-xl bg-white/80 hover:bg-white transition-all cursor-pointer shadow-sm group"
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={(e) => handleFileChange(docKey, e)} 
          accept="image/*,.pdf"
        />
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-green-50 transition-colors">
            <img src={streamLineImage} alt="icon" className='w-6 h-6' />
          </div>
          <div className="text-left">
            <h4 className="text-[13px] font-bold text-gray-800 leading-tight">{title}</h4>
            <p className="text-[10px] text-gray-500 truncate max-w-[120px]">
              {fileData ? fileData.name : "Tap to upload"}
            </p>
          </div>
        </div>
        <div className="shrink-0">
          {fileData ? (
            <div className="flex items-center gap-1 text-[#24b037] font-bold text-[11px]">
              <span>Done</span>
              <Check size={14} strokeWidth={4} />
            </div>
          ) : (
            <Upload size={16} className="text-gray-400" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative py-10 font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} className="w-full h-full object-cover fixed" alt="bg" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] fixed"></div>
      </div>

      {/* REGISTRATION CARD */}
      <div className="relative z-10 w-full max-w-[480px] mx-4 bg-white/40 border border-white/50 rounded-[2rem] shadow-2xl p-6 md:p-10 backdrop-blur-md animate-in fade-in duration-500">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Register Your Account
        </h1>

        <form className="w-full space-y-4" onSubmit={handleSignUp}>
          {/* 1. Text Fields */}
          {fields.map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                placeholder={field.label}
                required
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] outline-none text-gray-700 focus:ring-2 focus:ring-green-400 transition-all text-sm"
              />
            </div>
          ))}

          {/* 2. Document Upload Fields (Confirm Password ke theek niche) */}
          <div className="pt-2 space-y-3">
             <p className="text-[13px] font-bold text-gray-600 ml-1 mb-1">Legal Documents Required:</p>
             <DocumentUploadRow title="Profile Photo" docKey="photo" fileData={uploadedFiles.photo} />
             <DocumentUploadRow title="Aadhar Card (Front/Back)" docKey="aadhar" fileData={uploadedFiles.aadhar} />
             <DocumentUploadRow title="PAN Card" docKey="pan" fileData={uploadedFiles.pan} />
          </div>

          {/* 3. Submit Button */}
          <button 
            type="submit"
            className="w-full py-3.5 bg-[#3ec327] hover:bg-[#35a822] text-white font-black rounded-xl text-lg shadow-lg transition-all active:scale-95 mt-6"
          >
            Sign up
          </button>
        </form>

        <div className="text-center pt-6">
          <p className="text-gray-800 font-semibold text-sm">
            Already have an account? <Link to="/login/donor" className="text-[#3ec327] font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-[400px] rounded-[40px] p-10 shadow-2xl flex flex-col items-center animate-in zoom-in duration-300">
            <div className="bg-[#1db13a] p-4 rounded-full mb-6 shadow-lg shadow-green-100">
              <Check size={50} color="white" strokeWidth={4} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1db13a] mb-8 text-center leading-tight">
              Registration <br /> Successful
            </h2>
            <button 
              onClick={() => navigate('/login/donor')}
              className="w-full py-3 bg-[#1db13a] hover:bg-[#168a2d] text-white font-bold rounded-2xl text-lg shadow-md transition-all active:scale-95"
            >
                Continue to Login
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DonorRegister;