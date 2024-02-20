import { useState } from "react";
import logoimg from "/Logoimg.svg";
import { useEffect } from "react";
const Navbar = () => {
  const [colorchange, setcolorchange] = useState(false);
  useEffect(() => {
    onscroll();
  });
  const onscroll = () => {
    const scrollPosition = window.scrollY;
    const shouldNavbarBeScrolled = scrollPosition > 0;
    setcolorchange(shouldNavbarBeScrolled);
  };
  window.addEventListener("scroll", onscroll);
  return (
    <div>
      <div className={colorchange ? " nav-flex nav-scrolled" : "nav-flex"}>
        <img src={logoimg} />
        <ul className="sub-cat">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#fact">Fact</a>
          </li>
          <li>
            <a href="#price">Price</a>
          </li>
          <li>
            <a href="#course">Course</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
