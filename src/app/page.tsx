import Hero from "@components/Hero";
import Category from "@/Components/Category";
import AllProducts from "./Components/AllProducts";

const Home = () => {
 return (
  <>
   <Hero />
   <div className="mx-4 lg:mx-8">
    <Category />
    <AllProducts />
   </div>
  </>
 );
};

export default Home;
