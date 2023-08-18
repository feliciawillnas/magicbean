export default function Main() {
  return (
    <main style={mainStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>our shop</li>
        <li style={liStyle}>contact</li>
        <li style={liStyle}>about us</li>
        <li style={liStyle}>products</li>
      </ul>
    </main>
  );
}

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
