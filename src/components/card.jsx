import { AddToCartButton } from "./button";

function Card(props) {
  return (
    <div style={cardStyle} className="card">
      <h2 style={cardh2}>{props.title}</h2>
      <div style={imageContainer}>
        <img style={cardImg} src={props.imageSrc} alt={props.title} />
      </div>
      <AddToCartButton />
    </div>
  );
}

const cardStyle = {
  border: "3px solid black",
  borderRadius: "30px",
  padding: "2.5rem",
  marginBottom: "1rem",
  boxSizing: "border-box",
};

const cardh2 = {
  fontFamily: "Reenie Beanie",
  fontSize: "3rem",
  textAlign: "center",
  marginTop: "0.5rem",
};

const imageContainer = {
  display: "flex",
  justifyContent: "center",
};

const cardImg = {
  maxWidth: "100%",
  maxHeight: "350px",
  objectFit: "contain",
};

export default Card;
