import iphone from "../../assets/popular/upcoming.jpg";
const Upcoming = () => {
  return (
    <div className="relative w-full h-full">
      {/* Text on top of image, centered */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <p className="text-gray-400">30 Nov - 3 DEC</p>
        <h3 className="text-xl text-gray-500">
          The wait is on iPhone 14 max pro
        </h3>
        <p className="text-2xl font-bold text-orange-600">$999</p>
        <button className="btn bg-orange-500 text-white">Shop Now</button>
      </div>

      {/* Only this wrapper has hover effect on image */}
      <div className="overflow-hidden">
        <img
          className="w-full transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={iphone}
          alt=""
        />
      </div>
    </div>
  );
};

export default Upcoming;
