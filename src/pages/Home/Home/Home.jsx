import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import PopularItems from "../../../components/PopularItems/PopularItems";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="px-10">
      <Navbar />
      <Banner />
      <PopularItems />
      <Footer />
    </div>
  );
};

export default Home;
