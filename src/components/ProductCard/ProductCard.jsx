import { FcLike } from "react-icons/fc";
import { GiNetworkBars } from "react-icons/gi";
import { IoBagAddSharp } from "react-icons/io5";

const ProductCard = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="card bg-base-100  shadow-sm group">
      <figure className="relative">
        <img className=" w-[250px] " src={image} alt="" />
        <div className="inset-0  bg-opacity-96 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-body">
          <div className="flex">
            <div className="card-actions flex flex-col  mt-2">
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
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-400 font-bold">
          ${price}
          <span className="font-normal text-gray-500 text-sm ml-2 line-through">
            ${parseInt(price + 10)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

/* import { FcLike } from "react-icons/fc";
import { GiNetworkBars } from "react-icons/gi";
import { IoBagAddSharp } from "react-icons/io5";

const ProductCard = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="card bg-base-100  shadow-sm group">
      <figure className="relative">
        <img className=" w-[250px] " src={image} alt="" />
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
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-400 font-bold">
          ${price}
          <span className="font-normal text-gray-500 text-sm ml-2 line-through">
            ${parseInt(price + 10)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
 */
