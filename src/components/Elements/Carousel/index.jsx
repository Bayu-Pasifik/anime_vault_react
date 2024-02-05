import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getTopAnime } from '../../../services/anime_services';
import AnimeCard from '../AnimeCard';

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    getTopAnime((data) => {
      setTopAnime(data);
    });
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='h-96'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {topAnime.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div className='h-96 bg-slate-600 relative'>
              <div className="absolute bottom-0 right-0 h-96 w-full">
                {/* Semi-transparent overlay */}
                <div className="bg-black opacity-40 h-full w-full absolute"></div>
                <img src={anime.images.jpg.large_image_url} alt="" />
              </div>
              <div className="absolute bottom-0 right-0">
                <AnimeCard anime={anime}/>
              </div>
              <div className="absolute bottom-80 left-10 text-white font-bold text-5xl uppercase tracking-wide font-sans sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {anime.title}
              </div>
              <div className="absolute bottom-48 top-60 left-10 w-4/5 h-36 overflow-hidden">
                <p className="text-white text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify">
                  {anime.synopsis.replace("[Written by MAL Rewrite]","").substring(0, 300)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;