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
          <li>Home</li>
          <li>About</li>
          <li>Fact</li>
          <li>Price</li>
          <li>Course</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
