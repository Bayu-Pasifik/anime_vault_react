import { useEffect, useState } from "react";
import { getTopAnime } from "../../../services/anime_services";
import AnimeCard from "../AnimeCard";

const ListAnimeCard = () => {
    const [topAnime, setTopAnime] = useState([]);
    useEffect(() => {
       getTopAnime((data) => {
           setTopAnime(data)
       }) 
    },[])

    return (
        <div className="relative">
            <p className="text-white text-2xl font-bold mt-2 ml-2 tracking-wide
            font-sans">Anime Top</p>
            <div className="flex flex-wrap mt-4">
                {topAnime.length > 0 &&topAnime.map((anime) => (
                    <div className="mx-2 py-5">
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListAnimeCard;
