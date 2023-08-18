export default function Header() {
  return (
    <header style={headerStyle}>
      <img
        className="beanlogo"
        src="src/assets/beanlogo.png"
        alt=""
        srcset=""
      />
      <h1>.magic bean</h1>
    </header>
  );
}

const headerStyle = {
  fontFamily: "Lacquer",
  fontSize: "3rem",
  display: "flex",
  height: "120px",
  alignItems: "center",
};
