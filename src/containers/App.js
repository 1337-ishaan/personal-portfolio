import { useEffect } from "react";
import "./App.css";
import Landing from "../components/Landing/index";
import Welcome from "../components/Welcome/index";
import Services from "../components/Services/index";
import Inspiration from "../components/Inspiration/index";
import Contact from "../components/Contact/index";
import Work from "../components/Work/index";
import SnackbarProvider from "react-simple-snackbar";
import Hamburger from "../components/utilities/Hamburger";

// changing background color with scroll
export const scrollColor = (rgbColor, scrollContainer) => {
  const [red, green, blue] = rgbColor;
  const scrollElement = document.querySelector(`${scrollContainer}`);
  scrollElement.style.background = `rgb(${red}, ${green}, ${blue})`;
  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 180;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red / y, green / y, blue / y];
    scrollElement.style.background = `rgb(${r}, ${g}, ${b})`;
  });
};

const App = () => {
  useEffect(() => {
    //  scrollColor([100, 100, 100], ".welcome__services")
  }, []);

  return (
    <div className="App">
      <SnackbarProvider>
        <Hamburger />
        <Landing />
        <div className="u-center-content u-horizontal-divider"></div>
        <div className="welcome__services">
          <Welcome />
          <Services />
        </div>
        <Inspiration />
        <Contact />
        <Work />
      </SnackbarProvider>
    </div>
  );
};

export default App;
