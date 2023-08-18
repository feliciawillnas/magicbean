import ReadMoreButton from "./button";

export default function InformationSection() {
  return (
    <>
      <section style={sectionStyle}>
        <div style={divStyleLeft}>
          <h2>from bean to cup</h2>
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
};

const divStyleLeft = {
  flex: 1,
  paddingRight: "1rem",
  fontSize: "30px",
};

const pStyle = {
  marginBottom: "1.5rem",
};

const divStyleRight = {
  flex: 1,
};

const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5%",
};
