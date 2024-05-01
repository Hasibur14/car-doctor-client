import Banner from "../../components/Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";



const Home = () => {
    return (
        <div className="container mx-auto">
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Services></Services>
        </div>
    );
};

export default Home;