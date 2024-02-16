import React, { useEffect, useRef, useState } from "react";
import purchaselist from "../assets/purchasedata.json";
import CountUp from "react-countup";

const Purchase = () => {
  const [render, setrender] = useState(false);
  const myref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setrender(true);
          }
        });
      },
      {
        threshold: 0.2, // Adjust as needed
      }
    );

    if (myref.current) {
      observer.observe(myref.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="purchase-rel">
        <img
          className="travelimg"
          src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
        />
        <div className="overlay" ref={myref}>
          <div className="inner-overlay">
            <p className="purchase-bigtext">
              Some Features that Made us Unique
            </p>
            <p className="purchase-smalltext">
              Who are in extremely love with eco friendly system.
            </p>
            <ul className="purchase-flex">
              <li ref={myref}>
                {render ? <CountUp end={2536} /> : <p>0</p>}
                <p>Happy Clients</p>
              </li>
              <li ref={myref}>
                {render ? <CountUp end={6784} /> : <p>0</p>}
                <p>Total Projects</p>{" "}
              </li>
              <li ref={myref}>
                {render ? <CountUp end={1059} /> : <p>0</p>}
                <p>Cup Coffees</p>{" "}
              </li>
              <li ref={myref}>
                {render ? <CountUp end={12239} /> : <p>0</p>}
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
