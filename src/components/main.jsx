import ReadMoreButton from "./button";
import Card from "./card";

function InformationSection() {
  return (
    <>
      <section style={sectionStyle}>
        <div style={divStyleLeft}>
          <h2 style={informationSectionh2}>from bean to cup</h2>
          <p style={pStyle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            facere modi ex sint, praesentium laborum nobis quia repellat nemo ut
            ab quae aspernatur eius explicabo iste expedita tenetur mollitia
            corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Magnam, asperiores.
          </p>
          <ReadMoreButton />
        </div>
        <div style={divStyleRight}>
          <img style={imgStyle} src="src/assets/coffeeplant2.jpeg" alt="" />
        </div>
      </section>
    </>
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

const divStyleRight = {};

const imgStyle = {
  height: "400px",
  width: "600px",
  objectFit: "cover",
  borderRadius: "5%",
};

function Products() {
  return (
    <>
      <div style={cardSectionStyle}>
        <Card title="Yellow" imageSrc="/src/assets/coffeebag.png" />
        <Card title="Green" imageSrc="/src/assets/coffeebaggreen.png" />
        <Card title="Purple" imageSrc="/src/assets/coffeebagpurple.png" />
      </div>
    </>
  );
}

export { InformationSection, Products };

const cardSectionStyle = {
  backgroundColor: "#A54E0C",
  display: "flex",
  justifyContent: "space-around",
  padding: "1rem",
};
