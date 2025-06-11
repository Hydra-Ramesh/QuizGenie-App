import React from "react";

interface CenteredContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<CenteredContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
  );
};

export default Container;
