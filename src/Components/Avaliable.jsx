import andriod from "../assets/Icon.png";
import apple from "../assets/Vector.png";

const Avaliable = () => {
  return (
    <div>
      <div className="avaliable-bg">
        <p>Download Our App for all Platform</p>
        <p>
          It wont be a bigger problem to find one video game lover in your
          neighbor. Since the introduction of Virtual Game, it has been
          achieving great heights so far as its popularity and technological
          advancement are concerned.
        </p>
        <div className="mobilestore-top">
          <div className="mobilestore">
            <img className="os" src={andriod} />
            <div className="store-text">
              <p>Avaliable</p>
              <p>on App Store</p>
            </div>
          </div>
          <div className="mobilestore">
            <img className="os" src={apple} />
            <div className="store-text">
              <p>Avaliable</p>
              <p>on App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avaliable;
