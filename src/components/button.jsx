export default function ReadMoreButton() {
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

const readMoreButton = {
  backgroundColor: "black",
  fontFamily: "Lacquer",
  color: "#a5310c",
  padding: "0.6rem",
  borderRadius: "50px",
  border: "none",
  fontSize: "2.5rem",
};

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
