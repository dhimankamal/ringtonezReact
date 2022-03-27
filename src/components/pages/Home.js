import React from "react";
import Post from "../Common/Post";
import Search from "../Layout/Search";
import TopSearches from "../Layout/TopSearches";


const Home = () => {
    return(
        <>
            <Search />
            <Post />
            <TopSearches />
          
        </>

    );
};

export default Home;