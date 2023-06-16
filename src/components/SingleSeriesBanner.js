import requests from '../utils/requests';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { BiPlay } from 'react-icons/bi';

const SingleSeriesBanner = ({ serie, trailer, show }) => {
  return (
    <div key={serie.id} className='h-[90vh] focus-visible:outline-none relative bg-bannerImg '>
      <div className='absolute h-[90vh] inset-0 bg-bannerImg'></div>
      <Image priority width={1920} height={1200} className='h-[90vh] w-full object-cover focus-visible:border-none' src={requests.imgBase + serie.backdrop_path} alt={serie.name || serie.original_name} />
      <div className='absolute bottom-[80px] text-white px-3 pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] w-full'>
        <h2 className='sm:text-left font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl sm:w-[30ch] mb-3'>{serie.title || serie.original_name}</h2>
        <div className='flex justify-center sm:justify-start gap-4 font-bold text-gray-100 mb-1'>
          <NextLink href={serie.homepage} target='_blank' className='no-underline link-menu text-gray-300'>SITE OFICIAL</NextLink>
          <p>ANO {serie.first_air_date.slice(0, 4)}</p>
          <p>TEMPORADAS {serie.number_of_seasons}</p>
          <p>EPISODIOS {serie.number_of_episodes}</p>
        </div>
        <p className='sm:text-left max-w-[800px] sm:pr-4 sm:mb-6 md:text-lg'>{serie.overview}</p>
        
        <div>
        {trailer.length > 0 ? (
            <NextLink target='_blank' href={`https://www.youtube.com/watch?v=${trailer[0].key} `}>
              <button aria-label='Play' className='border-2 border-white rounded-full flex justify-center items-center p-2 hover:border-slate-200 hover:border-2 text-white hover:bg-gray-400'>
                <BiPlay className='w-9 h-9' />
              </button>
            </NextLink>
          ) : (
            <button aria-label='Play' className='border-2 border-white rounded-full flex justify-center items-center p-2 hover:border-slate-200 hover:border-2 text-white hover:bg-gray-400'>
              <BiPlay className='w-9 h-9' />
            </button>
          )}
   
        </div>
      </div>
    </div>
  );
};

export default SingleSeriesBanner;