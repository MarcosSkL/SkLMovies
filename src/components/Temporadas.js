import requests from '@/utils/requests';
import Image from 'next/image';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Temporadas = ({ handleChange, selected, movie, season }) => {
  return (
    <>
      <form className='relative w-fit mb-6 mt-[5px]'>
        <select name='temporadas' id='temporadas' onChange={handleChange} value={selected} className='  font-bold text-white bg-[#ffffff1f] mb py-4 px-3 pr-14 rounded-md appearance-none  text-base outline-none'>
          {movie.seasons.map((season, index) => {
            return (
              <React.Fragment key={season.id}>
                {season.name === 'Specials' ? null : (
                  <option className='font-bold text-white bg-[#1f1f1f]' value={season.season_number} key={index}>
                    Temporada {season.season_number}
                  </option>
                )}
              </React.Fragment>
            );
          })}
        </select>
        <BsChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl pointer-events-none' />
      </form>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 pr-[28px] sm:pr-[36px] md:pr-[48px] lg:pr-[60px]'>
        {season?.episodes?.map((episode, index) => {
          if (episode.still_path === null){
            return;
          }
          return (
            <article key={episode.id} className='mx-auto flex flex-col'>
              <Image width={300} height={250} src={requests.imgBase + episode.still_path} alt={episode.name}></Image>
              <h2 className='font-bold text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>{index + 1 + '.   ' + episode.name}</h2>
              <h3 className='text-gray-400 text-sm'>{episode.runtime} MIN</h3>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Temporadas;
