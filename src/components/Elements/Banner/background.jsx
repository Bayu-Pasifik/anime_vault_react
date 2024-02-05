import AnimeCard from "../AnimeCard";
import Card from "../AnimeCard/card";

const BackGround = (props) => {
    const { imgUrl,title,broadcast,synopsis } = props;
  return (
    <div className="relative h-1/2">
      <div className="w-full  bg-slate-400  relative" style={{ height: "35rem" }}>
        <img
          src={imgUrl}
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
        <div className="absolute bottom-0 right-0">
          <Card img={imgUrl}/>
        </div>
        <div className="absolute bottom-80 left-10 text-white font-bold 
        text-5xl uppercase tracking-wide font-sans">{title}</div>
      <div className="absolute bottom-72 top-60 left-10 text-white 
      text-4xl font-bold">{broadcast}</div>
      <div className="absolute bottom-64 top-72 left-10 w-4/5 h-36 truncate">
        <p className="text-white text-lg font-bold text-wrap 
        overflow-hidden text-justify">{synopsis.replace("[Written by MAL Rewrite]","")}</p>
      </div>
      </div>
    </div>
  );
};

export default BackGround;

