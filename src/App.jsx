import "./App.css";
import Footer from "./components/footer";
import Header from "./components/headercomponent";
import { InformationSection, Products } from "./components/main";

function App() {
  return (
    <div>
      <Header />
      <InformationSection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
