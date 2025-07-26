import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import NewProducts from "../../../components/NewProducts/NewProducts";
import PopularItems from "../../../components/PopularItems/PopularItems";
import Upcoming from "../../../components/Upcoming/Upcoming";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularItems />
      <Upcoming />
      <NewProducts />
    </div>
  );
};

export default Home;
