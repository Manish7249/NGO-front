import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // 'fixed' aur 'left-1/2' se navbar image ke upar float karega aur center mein rahega
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 
                    bg-black/30 backdrop-blur-md border border-white/10 
                    px-8 py-3 rounded-full flex justify-between items-center shadow-2xl">
      
      {/* Logo Section */}
      <div className="text-2xl font-bold text-white tracking-wider">
        <Link to="/">LOGO</Link>
      </div>
      
      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-10 font-medium text-white/90">
        <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
        <Link to="/help-desk" className="hover:text-green-400 transition-colors">Help Desk</Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/login" 
          className="px-6 py-2 bg-[#10b981] text-white rounded-lg font-bold 
                     hover:bg-green-600 transition-all active:scale-95 shadow-lg"
        >
          Login
        </Link>

        <Link 
          to="/register" 
          className="hidden sm:block px-6 py-2 bg-[#10b981] text-white rounded-lg font-bold 
                     hover:bg-green-600 transition-all active:scale-95 shadow-lg"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
