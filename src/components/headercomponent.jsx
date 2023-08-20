export default function Header() {
  return (
    <>
      <header style={headerStyle}>
        <img style={styledLogo} src="src/assets/logo3.png" />
        {/* classname beanlogo på img ovan */}
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

const styledLogo = {
  height: "100px",
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
