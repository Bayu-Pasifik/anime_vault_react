import Card from "./card";

const AnimeCard = (props) => {
    const { anime } = props
    return (
        <div>
            <Card anime={anime}/>
        </div>
    )
}

export default AnimeCard;