import drone3 from "../../../assets/drone3.jpg";
import watch from "../../../assets/watch.jpg";

const SubBanner = () => {
  return (
    <div className="grid grid-cols-2 gap-6 px-6">
      <div className=" relative  ">
        <div className="absolute left-20 top-20 space-y-4  ">
          <h2 className="text-2xl font-semibold">Smart Drone Series</h2>
          <p className="text-2xl text-orange-600  font-bold">From $399</p>
          <button className="btn bg-orange-500 text-white">Shop Now</button>
        </div>
        <img src={drone3} alt="" />
      </div>
      <div>
        <div className=" relative  ">
          <div className="absolute left-20 top-20 space-y-4  ">
            <h2 className="text-2xl font-semibold">Smart Watch Series</h2>
            <p className="text-2xl text-orange-600  font-bold">From $199</p>
            <button className="btn bg-orange-500 text-white">Shop Now</button>
          </div>
          <img src={watch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
