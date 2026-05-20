// import React from 'react';
// import { Plus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const EventsPage = () => {
//     const navigate = useNavigate();
//   // Dummy data image ke hisab se
//   const events = [
//     {
//       id: 1,
//       title: "Build a New Learning Center",
//       org: "Shiksha Foundation",
//       date: "10 May 2026",
//       status: "Upcoming",
//       image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=300"
//     },
//     {
//       id: 2,
//       title: "Feed the Hungry",
//       org: "Smile Foundation",
//       date: "05 Arp 2026",
//       status: "Upcoming",
//       image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=300"
//     },
//     {
//       id: 3,
//       title: "Plant a Better Tommorrow",
//       org: "Green Earth Trust",
//       date: "05 Arp 2026",
//       status: "Upcoming",
//       image: "https://images.unsplash.com/photo-1542601906-973be1f9f255?auto=format&fit=crop&q=80&w=300"
//     }
//   ];

//   return (
//     <div className="animate-fadeIn pb-10">
      
//       {/* 1. HEADER SECTION */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Events</h1>
//           <p className="text-gray-400 font-medium text-[15px] mt-1">see all upcoming Events</p>
//         </div>
        
//         {/* <button className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 text-lg">
//           <Plus size={24} strokeWidth={3} />
//           New Event
//         </button> */}
//         <button 
//             onClick={() => navigate('/ngo/events/create')} // Route hit karega
//             className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 text-lg"
//             >
//             <Plus size={24} strokeWidth={3} />
//             New Event
//         </button>
//       </div>

//       <div className="border-t border-gray-100 mt-4">
//         {/* 2. TABLE HEADERS */}
//         <div className="grid grid-cols-12 px-6 py-8 text-gray-400 font-bold text-sm uppercase tracking-widest">
//           <div className="col-span-6">Event</div>
//           <div className="col-span-3 text-center">Date</div>
//           <div className="col-span-3 text-right">Status</div>
//         </div>

//         {/* 3. EVENTS LIST */}
//         <div className="space-y-4">
//           {events.map((event) => (
//             <div 
//               key={event.id} 
//               className="grid grid-cols-12 items-center bg-white hover:bg-gray-50 transition-colors px-6 py-5 border-b border-gray-50 last:border-0"
//             >
//               {/* Event Info */}
//               <div className="col-span-6 flex items-center gap-4">
//                 <div className="w-20 md:w-32 h-14 md:h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm">
//                   <img src={event.image} alt="" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-tight">
//                     {event.title}
//                   </h4>
//                   <p className="text-gray-400 text-xs md:text-sm font-semibold mt-1">
//                     {event.org}
//                   </p>
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="col-span-3 text-center text-gray-600 font-bold text-sm md:text-base">
//                 {event.date}
//               </div>

//               {/* Status Badge */}
//               <div className="col-span-3 flex justify-end">
//                 <span className="bg-red-50 text-[#ef4444] px-5 py-1.5 rounded-lg text-xs md:text-sm font-bold shadow-sm">
//                   {event.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default EventsPage;















import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const navigate = useNavigate();

  // Dummy data image ke hisab se
  const events = [
    {
      id: 1,
      title: "Build a New Learning Center",
      org: "Shiksha Foundation",
      date: "10 May 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Feed the Hungry",
      org: "Smile Foundation",
      date: "05 Arp 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      title: "Plant a Better Tommorrow",
      org: "Green Earth Trust",
      date: "05 Arp 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1542601906-973be1f9f255?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="animate-fadeIn pb-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Events</h1>
          <p className="text-gray-400 font-medium text-[15px] mt-1">see all upcoming Events</p>
        </div>
        
        {/* Create New Event Button */}
        <button 
          onClick={() => navigate('/ngo/events/create')} 
          className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 text-lg"
        >
          <Plus size={24} strokeWidth={3} />
          New Event
        </button>
      </div>

      <div className="border-t border-gray-100 mt-4">
        {/* 2. TABLE HEADERS */}
        <div className="grid grid-cols-12 px-6 py-8 text-gray-400 font-bold text-sm uppercase tracking-widest">
          <div className="col-span-6">Event</div>
          <div className="col-span-3 text-center">Date</div>
          <div className="col-span-3 text-right">Status</div>
        </div>

        {/* 3. EVENTS LIST MAPPING */}
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id} 
              // --- NAYA NAVIGATION LOGIC YAHAN HAI ---
              onClick={() => navigate('/ngo/events/details')} 
              className="grid grid-cols-12 items-center bg-white hover:bg-gray-50 transition-colors px-6 py-5 border-b border-gray-50 last:border-0 cursor-pointer group"
            >
              {/* Event Info (Image + Title) */}
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-20 md:w-32 h-14 md:h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold mt-1">
                    {event.org}
                  </p>
                </div>
              </div>

              {/* Date Column */}
              <div className="col-span-3 text-center text-gray-600 font-bold text-sm md:text-base">
                {event.date}
              </div>

              {/* Status Badge Column */}
              <div className="col-span-3 flex justify-end">
                <span className="bg-red-50 text-[#ef4444] px-5 py-1.5 rounded-lg text-xs md:text-sm font-bold shadow-sm border border-red-100/50">
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EventsPage;