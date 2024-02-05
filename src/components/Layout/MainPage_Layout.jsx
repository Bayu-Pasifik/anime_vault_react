import { useEffect, useState } from "react";
import { getTopAnime } from "../../services/anime_services";
import BackGround from "../Elements/Banner/background";
import Carousel from "../Elements/Carousel";

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
            <div>Text</div>
            {/* <BackGround imgUrl={topAnime[0]?.images.jpg.large_image_url} title={topAnime[0].title}
            broadcast={topAnime[0].broadcast.string} synopsis={topAnime[0].synopsis}/> */}
            <Carousel topAnime={topAnime}></Carousel>
            <div>Test</div>
        </div>
    )
}


export default MainPageLayout;