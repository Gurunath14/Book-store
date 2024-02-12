import logoimg from "/Logoimg.svg";
const Navbar = () => {
  return (
    <div>
      <div className="nav-flex">
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
