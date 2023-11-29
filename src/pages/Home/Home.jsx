


import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Product from "../../Components/Product/Product";
import Sample from "../../Components/Sample/sample";

const Home = () => {
    return (
        <div>

            <NavBar />
            <Header />
            <Product />
            <Sample />



            {/* <Header /> */}
            <div className="homeContainer">
                {/* <Featured /> */}
                <h1 className="homeTitle">Browse by property type</h1>
                {/* <PropertyList /> */}
                <h1 className="homeTitle">Homes guests love</h1>
                {/* <FeaturedProperties />
                <MailList />
                <Footer /> */}
            </div>
        </div>
    );
};

export default Home;