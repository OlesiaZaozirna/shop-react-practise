import React from "react";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Home = () => {
    const { list } = useSelector(({ products }) => products)
    const limitedList = list.slice(0, 5);

    return (
        <>
            <Poster />
            <Products products={limitedList} amount={5} title="Trending" />
        </>
    )
};

export default Home;
