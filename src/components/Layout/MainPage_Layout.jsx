import { useEffect, useState } from "react";
import { getTopAnime } from "../../services/anime_services";
import Carousel from "../Elements/Carousel";
import Navbar from "../Elements/Navbar";
import ListAnimeCard from "../Elements/Fragments/List_Anime_Card";

const MainPageLayout = () => {


    return (
        <div className="">
            <Navbar/>
            <Carousel></Carousel>
            <ListAnimeCard></ListAnimeCard>   
        </div>
    )
}


export default MainPageLayout;