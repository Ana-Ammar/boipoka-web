import Banner from "../Components/Banner";
import Books from "./Books/Books";

const Home = () => {
    return (
        <div className="md:px-8 px-3">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;