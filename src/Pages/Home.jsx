import Banner from "../Components/Banner";
import Books from "./Books/Books";

const Home = () => {
    return (
        <div className="px-8">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;