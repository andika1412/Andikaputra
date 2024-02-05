import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../Comp";

const Loading = () => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default Loading;
