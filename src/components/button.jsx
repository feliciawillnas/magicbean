export default function ReadMoreButton() {
  return (
    <>
      <button style={readMoreButton}>read more</button>
    </>
  );
}

function addToCartButton() {
  return <button>Add to cart</button>;
}

const readMoreButton = {
  backgroundColor: "black",
  fontFamily: "Lacquer",
  color: "#a5310c",
  padding: "0.6rem",
  borderRadius: "50px",
  border: "none",
  fontSize: "2rem",
};
