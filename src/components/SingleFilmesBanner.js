import requests from '../utils/requests';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { MdOutlineLocalMovies } from 'react-icons/md';

const SingleFilmesBanner = ({ movie, individual, trailer, show }) => {
  return (
    <div key={movie.id} className='h-[90vh] focus-visible:outline-none relative bg-bannerImg '>
      <div className='absolute h-[90vh] inset-0 bg-bannerImg'></div>
      <Image priority width={1920} height={1200} className='h-[90vh] w-full object-cover focus-visible:border-none' src={requests.imgBase + movie.backdrop_path} alt={movie.title || movie.original_name} />
      <div className='absolute bottom-[80px] text-white px-3 pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] w-full'>
        <h2 className='text-center sm:text-left font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl sm:w-[30ch] mb-3'>{movie.title || movie.original_name}</h2>
        <div className='flex justify-center sm:justify-start gap-4 text-gray-400 mb-1'>
          {show ? <p>{movie.number_of_seasons} Temporadas</p> : <p>{movie.runtime} MIN</p>}
          <p>{movie.release_date?.slice(0, 4)}</p>
        </div>
        <p className={`text-center sm:text-left max-w-[800px] sm:pr-4 sm:mb-6 ${individual ? '' : ' parrafo text-ellipsis overflow-hidden sm:whitespace-nowrap'}  md:text-lg  `}>{movie.overview}</p>
        <div className={`gap-5 items-center ${individual ? 'flex justify-center mt-3 sm:justify-start' : 'hidden'}  sm:flex`}>
          

          {trailer.length > 0 ? (
            <NextLink target='_blank' href={`https://www.youtube.com/watch?v=${trailer[0].key} `}>
              <button aria-label='Play' className='border-2 border-white rounded-full flex justify-center items-center p-2 hover:border-slate-200 hover:border-2 text-white hover:bg-gray-400'>
                <BiPlay className='w-9 h-9' />
              </button>
            </NextLink>
          ) : (
            <button aria-label='Trailer' className='flex items-center justify-center gap-2 px-[20px] bg-[#3e3b44b3] min-h-[4px] min-w-[144px] py-[12px] rounded-[4px] hover:border-[#663399] hover:border-2 hover:bg-black font-semibold'>
              <MdOutlineLocalMovies className='w-5 h-5' /> Trailer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleFilmesBanner;
