import React, { useEffect, useState } from "react";

export default function Header() {
  {
    /** HAMBUGER USE EFFECT */
  }
  const [isMobile, setIsMobile] = useState(false);
  const [showNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    alignItems: "center",
    padding: "0.5rem",
  };

  const styledLogoImg = {
    height: "100%",
    width: "50%",
    objectFit: "cover",
  };

  const hamburgerStyle = {
    height: "100%",
    display: isMobile ? "block" : "none",
    cursor: "pointer",
    fontSize: "1.6rem",
  };

  const navStyle = {
    fontFamily: "Reenie Beanie",
    fontSize: "2rem",
    display: isMobile ? (showNav ? "block" : "none") : "block",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const liStyle = {
    listStyleType: "none",
  };

  return (
    <>
      <header style={headerStyle}>
        <img style={styledLogoImg} src="/assets/logo3.png" alt="Logo" />
        {isMobile && (
          <i style={hamburgerStyle} className="fa-solid fa-bars"></i>
        )}
      </header>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>our shop</li>
          <li style={liStyle}>contact</li>
          <li style={liStyle}>about us</li>
          <li style={liStyle}>products</li>
        </ul>
      </nav>
    </>
  );
}
