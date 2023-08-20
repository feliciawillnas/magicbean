import React, { useEffect, useState } from "react";

export default function ReadMoreButton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const readMoreButton = {
    backgroundColor: "black",
    fontFamily: "Lacquer",
    color: "#a5310c",
    padding: "0.6rem",
    borderRadius: "50px",
    border: "none",
    fontSize: isMobile ? "1.8rem" : "2.5rem",
  };

  return (
    <>
      <button style={readMoreButton}>read more</button>
    </>
  );
}

function AddToCartButton() {
  return (
    <>
      <button style={addToCartButton}>Add to cart</button>
    </>
  );
}

const addToCartButton = {
  backgroundColor: "black",
  fontFamily: "Lacquer",
  color: "#A54E0C",
  padding: "0.2rem",
  borderRadius: "50px",
  border: "none",
  fontSize: "1.2rem",
  width: "100%",
};

export { ReadMoreButton, AddToCartButton };
