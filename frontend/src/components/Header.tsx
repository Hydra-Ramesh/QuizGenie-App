export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 fixed top-0 z-50 backdrop-blur-md backdrop-saturate-150 bg-transparent">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        {/* Replace with your logo image or text */}
        <img src="./logo.png" alt="QuizGenie Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-white">QuizGenie</span>
      </div>

      {/* Navigation and button on the right */}
      <div className="flex items-center space-x-6">
        {/* Navigation links */}
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition">Contact Us</a>
        </nav>
        {/* Github Button */}
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition"
        >
          Github
        </a>
      </div>
    </header>
  );
};
