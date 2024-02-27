// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import selfdata from "../assets/selfdata.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { additem } from "../StateHandler/cartslice";

const Bookshelf = () => {
  const dispatch = useDispatch();
  const bookselected = (datagot) => {
    dispatch(additem(datagot));
  };

  return (
    <div id="course">
      <div className="bookself-top">
        <p>Top Courses That are open for Students</p>
        <p>Who are in extremely love with eco friendly system.</p>

        <div className="lib">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {selfdata.map((mapdata, index) => (
              <div key={index}>
                <SwiperSlide>
                  <img className="bookself-img" src={mapdata.image} />
                  <button
                    className="bookself-btn"
                    onClick={() => bookselected(mapdata)}
                  >
                    For Sale
                  </button>
                  <p className="self-price">
                    {mapdata.name} <span> {mapdata.price}</span>
                  </p>
                  <p className="self-dis">{mapdata.text}</p>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Bookshelf;
