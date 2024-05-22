import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Loader.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const location = useLocation();

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  const loader = useRef(null);
  useEffect(() => {
    const el = loader.current;
    var tl = gsap.timeline();
    tl.to(
      el,
      {
        delay: 4.55,
        duration: 2.5,
        opacity: 0,
      },
    );
    tl.to(
      el,
      {
        y: "-100%"
      },
    );
  }, []);

  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div id='scrollable' className="loader" ref={loader} onScroll={preventScroll}>
      <div className="loading-text">
        <span>D</span>
        <span>E</span>
        <span>C</span>
        <span>R</span>
        <span>Y</span>
        <span>P</span>
        <span>T</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
}

export default Loader;
