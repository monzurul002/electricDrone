import drone1 from "../../../assets/drone.png";
import drone2 from "../../../assets/drone2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SubBanner from "./SubBanner";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="text-5xl font-bold ">
                  Double <br /> Strength White Drone
                </h1>
                <p className="py-8 text-xl">
                  Particularly ideal for people who need to use several times{" "}
                  <br /> per day. Good ventilation design.
                </p>

                <button className="btn bg-orange-500 text-white">
                  Shop Now
                </button>
              </div>
            </div>
            <img className="object-cover pt-4 " src={drone1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="text-5xl font-bold ">
                  Digital Version <br /> New Version For You
                </h1>
                <p className="py-8 text-xl">
                  Particularly ideal for people who need to use several times{" "}
                  <br /> per day. Good ventilation design.
                </p>

                <button className="btn bg-orange-500 text-white">
                  Shop Now
                </button>
              </div>
            </div>
            <img className="object-cover pt-4 " src={drone2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <SubBanner />
      </div>
    </div>
  );
};

export default Banner;
