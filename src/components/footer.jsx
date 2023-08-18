export default function Footer() {
  return (
    <>
      <footer style={footerStyle}>
        <div style={leftFooter}>
          <img style={logoStyle} src="/src/assets/beanlogo.png" alt="" />
          <div>
            <h2>phone +237 23 43 93</h2>
            <h2>visit us @ magic st 342 12</h2>
          </div>
        </div>
      </footer>
    </>
  );
}

const footerStyle = {
  backgroundColor: "#D88C29",
  fontFamily: "Reenie Beanie",
  fontSize: "1.5rem",
  height: "150px",
  display: "flex",
};

const leftFooter = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "100px",
  marginRight: "1rem",
};
