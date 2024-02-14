import React from "react";

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
                <p>2345</p>
                <p>Happy Clients</p>
              </li>
              <li>
                <p>6784</p>
                <p>Total Projects</p>{" "}
              </li>
              <li>
                <p>1058</p>
                <p>Cup Coffees</p>{" "}
              </li>
              <li>
                <p>12345</p>
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
        <div className="purchaseplan">
          <p>PDF</p>
          <p>Who are in extremely love with eco friendly system.</p>
          <div>
            <p>$79.99</p>
            <button>Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
