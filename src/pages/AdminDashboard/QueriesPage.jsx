import { useNavigate } from 'react-router-dom';
import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
import smileLogo from '../../assets/landingPageImage/smile-foundation.png';
import teachLogo from '../../assets/landingPageImage/eduation-image.png';

const QueriesPage = () => {
  const navigate = useNavigate();

  const queries = [
    {
      id: 1,
      name: "Shiksha Foundation",
      date: "20 May 2026",
      regNo: "NGO -1099-2024",
      logo: shikshaLogo
    },
    {
      id: 2,
      name: "Education for all",
      date: "20 May 2026",
      regNo: "NGO -1099-2024",
      logo: teachLogo
    },
    {
      id: 3,
      name: "Green Earth Foundation",
      date: "20 May 2026",
      regNo: "NGO -1099-2024",
      logo: smileLogo
    }
  ];

  const handleNavigate = (id) => {
    navigate('/admin/queries/details');
  };

  return (
    <div className="animate-fadeIn pb-10 font-sans text-left">
      
      {/* 1. Header Label */}
      <div className="mb-6 px-4">
        <h3 className="text-xl font-bold text-gray-700">From:</h3>
      </div>

      {/* 2. Queries List */}
      <div className="space-y-6 max-w-5xl">
        {queries.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm transition-all hover:shadow-md"
          >
            
            {/* CLICKABLE LOGO */}
            <div 
              onClick={() => handleNavigate(item.id)}
              className="w-44 h-28 shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl p-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>

            {/* CLICKABLE INFO SECTION */}
            <div className="flex-1 w-full space-y-2">
              <h4 
                onClick={() => handleNavigate(item.id)}
                className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-green-600 transition-colors inline-block"
              >
                {item.name}
              </h4>
              
              <div className="text-gray-500 font-bold text-[15px] md:text-[17px] space-y-1">
                <p>Applied On: <span className="text-gray-800">{item.date}</span></p>
                <p>Registration No. <span className="text-gray-800 ml-2 tracking-tight">{item.regNo}</span></p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default QueriesPage;