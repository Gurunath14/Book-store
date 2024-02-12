import bigbook from "/Bookhero.svg";
const Hero = () => {
  return (
    <div className="Hero-flex">
      <div>
        <p>AUTHOR: TRAVOR JAMES</p>
        <p>NEW ADVENTURE</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
          doloribus vitae tenetur, vel molestias explicabo ducimus facilis,
          aliquid natus quam dolor reiciendis tempora dolorum autem debitis
          delectus laborum architecto.
        </p>
        <button>BUY NOW FOR $9.99</button>
      </div>
      <div>
        <img src={bigbook} />
      </div>
    </div>
  );
};
export default Hero;
