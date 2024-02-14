import bigbook from "/Bookhero.svg";
const Hero = () => {
  return (
    <div className="Hero-flex">
      <div className="herocontent-flex">
        <p className="Author">AUTHOR: TRAVOR JAMES</p>
        <p className="Hero-Bigtext">NEW ADVENTURE</p>
        <p className="Herolorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
          doloribus vitae tenetur, vel molestias explicabo ducimus facilis,
          aliquid natus quam dolor reiciendis tempora dolorum autem debitis
          delectus laborum architecto.
        </p>
        <button className="hero-btn">BUY NOW FOR $9.99</button>
      </div>
      <div>
        <img className="bookimg" src={bigbook} />
      </div>
    </div>
  );
};
export default Hero;
