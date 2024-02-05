const Card = (props) => {
    const {anime} = props
    return (
       <div className="container  flex flex-col justify-start place-items-start max-w-2xl
        px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-64 w-60" >
         <div className=" bg-slate-600 w-full h-full rounded-lg ">
            <img src={anime.images.jpg.image_url} alt="Images" className="w-full h-full object-cover rounded-lg" />    
        </div>
        <div className="flex flex-row justify-between mt-3">
        <h1 className="items-start">{anime.title}</h1>
        <h1 className="ml-10">{anime.rate}</h1>
        </div>
       </div>
    )
}

export default Card;