import React, { ReactNode } from "react";
import Header from "../(components)/main/Header";
import PropTypes from "prop-types";

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayouts: React.FC<MainlayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="w-full h-auto bg-green-400">{children}</div>
      <div className="w-full h-[10rem] bg-red-500"></div>
    </>
  );
};
Mainlayouts.propTypes = {
  children: PropTypes.node,
};

export default Mainlayouts;
