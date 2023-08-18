export default function Header() {
  return (
    <>
      <header style={headerStyle}>
        <img
          className="beanlogo"
          src="src/assets/beanlogo.png"
          alt=""
          srcset=""
        />
        <h1>.magic bean</h1>
      </header>
      <main style={mainStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>our shop</li>
          <li style={liStyle}>contact</li>
          <li style={liStyle}>about us</li>
          <li style={liStyle}>products</li>
        </ul>
      </main>
    </>
  );
}

const headerStyle = {
  fontFamily: "Lacquer",
  fontSize: "3rem",
  display: "flex",
  marginBottom: "1rem",
  alignItems: "center",
  padding: "0.5rem",
};

const mainStyle = {
  fontFamily: "Reenie Beanie",
  fontSize: "2rem",
};

const ulStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const liStyle = {
  listStyleType: "none",
};
