import React, { useEffect, useState } from "react";
import ReadMoreButton from "./button";
import Card from "./card";

function InformationSection() {
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

  return (
    <section style={sectionStyle}>
      <div style={{ ...divStyleLeft, flex: isMobile ? "1" : "none" }}>
        <h2 style={informationSectionh2}>from bean to cup</h2>
        <p style={pStyle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere
          modi ex sint, praesentium laborum nobis quia repellat nemo ut ab quae
          aspernatur eius explicabo iste expedita tenetur mollitia corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          asperiores.
        </p>
        <ReadMoreButton />
      </div>
      <div>
        {isMobile ? null : (
          <img style={imgStyle} src="src/assets/coffeeplant3.jpg" alt="" />
        )}
      </div>
    </section>
  );
}

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Reenie Beanie",
  padding: "1rem",
  marginTop: "2.5rem",
  justifyContent: "space-around",
  marginBottom: "3rem",
};

const informationSectionh2 = {
  fontSize: "4rem",
  marginBottom: "0.5rem",
};

const divStyleLeft = {
  paddingRight: "1rem",
  fontSize: "30px",
  width: "45%",
};

const pStyle = {
  marginBottom: "1.5rem",
  fontSize: "2rem",
};

const imgStyle = {
  height: "450px",
  width: "100%",
  objectFit: "contain",
  borderRadius: "5%",
};

function Products() {
  return (
    <>
      <div style={cardSectionStyle}>
        <Card title="Yellow" imageSrc="/src/assets/coffeebagnatural.png" />
        <Card title="Green" imageSrc="/src/assets/coffeebagnatural.png" />
        <Card title="Purple" imageSrc="/src/assets/coffeebagnatural.png" />
      </div>
    </>
  );
}

const cardSectionStyle = {
  backgroundColor: "#A54E0C",
  display: "flex",
  justifyContent: "space-around",
  padding: "1rem",
};

export { InformationSection, Products };
