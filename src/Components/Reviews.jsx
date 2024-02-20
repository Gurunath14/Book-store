import { Swiper, SwiperSlide } from "swiper/react";
import review from "../assets/reviewdata.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Review = () => {
  return (
    <div className="section">
      <div className="Review-text">
        <p>What our Reader’s Say about us</p>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="review-scroll">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {review.map((mapdata, index) => (
            <SwiperSlide key={mapdata.id}>
              <div className="review-border">
                <img src={mapdata.image} />
                <p>{mapdata.review}</p>
                <p>{mapdata.name}</p>
                <p>{mapdata.des}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Review;
