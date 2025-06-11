import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { Cover } from "../components/ui/cover";
import {AuroraBackground} from '../components/ui/aurora-background';

const HomePage = () => {
  return (
    <div className="pt-20 h-screen w-screen flex items-center justify-center bg-gray-900">
      <BackgroundGradientAnimation>
        {/* <AuroraBackground> */}
        
        {/* Centered container for all content */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-8 max-w-3xl mx-auto">
          
          {/* Heading with increased line spacing */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-relaxed md:leading-relaxed">
            Create, Play, and Learn with <Cover>QuizGenie</Cover>
          </h1>
          
          {/* Caption */}
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
            Your personal AI quiz wizard at your fingertips.
          </p>
          
          {/* Buttons with margin-top for spacing below paragraph */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
          
        </div>
      </BackgroundGradientAnimation>
      {/* </AuroraBackground> */}
    </div>
  );
};

export default HomePage;
