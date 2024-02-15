import React from "react";
import purchaselist from "../assets/purchasedata.json";
import CountUp from "react-countup";

const Purchase = () => {
  return (
    <div>
      <div className="purchase-rel">
        <img
          className="travelimg"
          src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
        />
        <div class="overlay">
          <div className="inner-overlay">
            <p className="purchase-bigtext">
              Some Features that Made us Unique
            </p>
            <p className="purchase-smalltext">
              Who are in extremely love with eco friendly system.
            </p>
            <ul className="purchase-flex">
              <li>
                <CountUp end={2536} />
                <p>Happy Clients</p>
              </li>
              <li>
                <CountUp end={6784} />
                <p>Total Projects</p>{" "}
              </li>
              <li>
                <CountUp end={1059} />
                <p>Cup Coffees</p>{" "}
              </li>
              <li>
                <CountUp end={12239} />
                <p>Ticket submitted</p>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="purchaselist-flex">
        <div className="inner-purchaselist">
          <p>Purchase whatever you want</p>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="purchaselist-top">
          {purchaselist.map(({ Name, Content, Price, id }) => (
            <div className="purchaseplan" key={id}>
              <p>{Name}</p>
              <p>Who are in extremely love with eco friendly system.</p>
              <div className="purchaseprice">
                <p>
                  <span className="dollorsmall">$</span>
                  {Price}
                </p>
                <button>Purchase Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section"></div>
    </div>
  );
};

export default Purchase;
