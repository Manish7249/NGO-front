import { useState, useRef } from 'react';
import { Calendar, Upload, Plus, ArrowRight, Check } from 'lucide-react';

const BasicDetails = ({ onNext }) => {
  const hiddenDateRef = useRef(null);
  const [establishmentDate, setEstablishmentDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Projects state
  const [projects, setProjects] = useState([
    { id: Date.now(), description: '', isUploaded: false }
  ]);

  // Date Typing Logic (DD-MM-YYYY auto-format)
  const handleTextChange = (e) => {
    let val = e.target.value.replace(/\D/g, ""); // Sirf numbers allow karega
    let formatted = "";

    if (val.length > 0) {
      formatted += val.substring(0, 2);
      if (val.length > 2) {
        formatted += "-" + val.substring(2, 4);
      }
      if (val.length > 4) {
        formatted += "-" + val.substring(4, 8);
      }
    }
    setEstablishmentDate(formatted);
  };

  // Calendar Picker selection logic
  const handleDateSelection = (e) => {
    const dateValue = e.target.value; 
    if (dateValue) {
      const [year, month, day] = dateValue.split("-");
      setEstablishmentDate(`${day}-${month}-${year}`);
    }
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), description: '', isUploaded: false }]);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].description = value;
    setProjects(updatedProjects);
  };

  const handleFileUpload = (index, e) => {
    if (e.target.files.length > 0) {
      const updatedProjects = [...projects];
      updatedProjects[index].isUploaded = true;
      setProjects(updatedProjects);
    }
  };

  return (
    <div className="w-full animate-fadeIn px-2">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-md md:text-lg font-bold text-gray-800">Basic Details</h2>
        <p className="text-gray-600 text-xs">Let's start with some basic details</p>
      </div>

      <div className="grid gap-3 md:gap-4">
        {/* NGO Basic Info */}
        <input type="text" placeholder="Enter your NGO name" className="input-responsive" />
        <input type="text" placeholder="Registration Number" className="input-responsive" />
        <input type="email" placeholder="Email ID" className="input-responsive" />
        <input type="tel" placeholder="Phone No." className="input-responsive" />
        <input type="text" placeholder="Where's Your NGO Located" className="input-responsive" />

        {/* Date of Establishment */}
        <div className="relative">
          <input 
            type="text" 
            placeholder={isFocused && !establishmentDate ? "dd-mm-yyyy" : "Date of Establishment"}
            value={establishmentDate}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleTextChange}
            maxLength="10"
            className="input-responsive w-full pr-12" 
          />
          <button 
            type="button"
            onClick={() => hiddenDateRef.current.showPicker()}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#1da036] transition-colors"
          >
            <Calendar size={22} />
          </button>
          <input 
            ref={hiddenDateRef}
            type="date"
            onChange={handleDateSelection}
            className="absolute opacity-0 pointer-events-none"
            style={{ width: 0, height: 0 }}
          />
        </div>

        {/* Dynamic Project Sections */}
        {projects.map((project, index) => (
          <div key={project.id} className="grid gap-3 animate-fadeIn">
            <input 
              type="text" 
              placeholder={index === 0 ? `USP Project Description 1` : `USP Project Description ${index + 1}`} 
              value={project.description}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="input-responsive"
            />

            <div className="relative">
              <input 
                type="file" 
                id={`file-upload-${index}`}
                className="hidden" 
                onChange={(e) => handleFileUpload(index, e)}
              />
              {/* Padding py-7 karke field bada kiya hai */}
              <label 
                htmlFor={`file-upload-${index}`}
                className="flex items-center justify-between py-5 mt-1 px-6 border border-gray-400 rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Icon size 32 kiya hai */}
                  <Upload className="text-gray-700" size={28} />
                  <span className="text-base font-semibold text-gray-800">Upload Images</span>
                </div>

                {project.isUploaded && (
                  <div className="flex items-center gap-2 text-[#22c55e] font-semibold text-base animate-popIn">
                    <span>Uploaded</span>
                    <Check size={24} strokeWidth={4} /> 
                  </div>
                )}
              </label>
            </div>
          </div>
        ))}

        {/* Add Another Project Button */}
        <div className="text-left">
          <button 
            type="button"
            onClick={addProject}
            className="flex items-center gap-1 text-[#1da036] font-bold text-xs mt-1 hover:opacity-80 active:scale-95 transition-all"
          >
            Add another project <Plus size={16} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-8 flex justify-center">
        <button 
          onClick={onNext}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 md:px-10 py-3 bg-[#1da036] text-white rounded-xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95 text-sm md:text-base"
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BasicDetails;
