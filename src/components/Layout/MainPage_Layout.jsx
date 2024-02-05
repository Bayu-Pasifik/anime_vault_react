import { useEffect, useState } from "react";
import { getTopAnime } from "../../services/anime_services";
import Carousel from "../Elements/Carousel";
import Navbar from "../Elements/Navbar";

const MainPageLayout = () => {
    const [topAnime, setTopAnime] = useState([]);
    useEffect(() => {
       getTopAnime((data) => {
           setTopAnime(data)
       }) 
    },[])
    {
        console.log(topAnime)
    }

    return (
        <div className="bg-slate-700">
            <Navbar/>
            <Carousel topAnime={topAnime}></Carousel>
        </div>
    )
}


export default MainPageLayout;