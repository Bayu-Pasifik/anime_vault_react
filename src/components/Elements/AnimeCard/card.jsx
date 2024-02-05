import React from 'react';

const Card = (props) => {
  const { anime } = props;
  return (
    <div key={anime.mal_id} className="relative group w-44 h-64 overflow-hidden">
      <div className="w-full h-full rounded-lg ">
        <img
          src={anime.images.jpg.image_url}
          alt="Images"
          className="w-full h-full object-cover rounded-lg 
        group-hover:transition-transform transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-lg font-bold">{anime.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
