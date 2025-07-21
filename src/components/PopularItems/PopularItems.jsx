import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import airbard from "../../assets/popular/airbard.jpg";
import airphone from "../../assets/popular/airphone.jpg";
import iphone from "../../assets/popular/iphone.jpg";
import laptop from "../../assets/popular/laptop.jpg";
import tab from "../../assets/popular/tab.jpg";
import sound from "../../assets/popular/sound.jpg";
import { IoBagAddSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { FcLike } from "react-icons/fc";

const PopularItems = () => {
  return (
    <div className="py-5">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={airbard} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Airbard Pro white</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={airphone} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Aiphone Pro white</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={iphone} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Define Class</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={laptop} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Just Explore Happiness</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={tab} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Exclusive Quality</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={sound} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Enjoy Beta Sound</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-sm group">
            <figure className="relative">
              <img src={airbard} alt="Shoes" />
              <div className="absolute top-[180px] inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
                <div className="flex">
                  <div className="card-actions  mt-2">
                    <button
                      toolT
                      className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800"
                    >
                      <IoBagAddSharp className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <GiNetworkBars className="text-xl" />
                    </button>
                    <button className=" cursor-pointer rounded-full p-2 text-center   text-white bg-gray-800">
                      <FcLike className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>

            <div className=" pl-10 py-2">
              <h2 className="card-title">Airbard Pro white</h2>
              <p className="text-xl text-orange-400 font-bold">
                $54
                <span className="font-normal text-gray-500 text-sm ml-2 line-through">
                  $64
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularItems;
