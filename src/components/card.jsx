import { AddToCartButton } from "./button";

function Card(props) {
  return (
    <>
      <div style={cardStyle} className="card">
        <h2 style={cardh2}>{props.title}</h2>
        <img style={cardImg} src={props.imageSrc} alt={props.title} />
        <AddToCartButton />
      </div>
    </>
  );
}

const cardStyle = {
  border: "3px solid black",
  borderRadius: "40px",
  padding: "1rem",
  width: "20%",
};

const cardh2 = {
  fontFamily: "Reenie Beanie",
  fontSize: "3.5rem",
  textAlign: "center",
};

const cardImg = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
};

export default Card;
