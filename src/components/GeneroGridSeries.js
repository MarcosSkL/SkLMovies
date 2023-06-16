import requests from '@/utils/requests';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';

const GeneroGrid = ({ titulo, series, tvshow }) => {
  return (
    <section>
      <h2 className='px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] pt-[100px] text-white text-3xl font-semibold'>{titulo}</h2>
      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] pt-[20px] gap-4'>
        {series.map((mov) => {
          return (
            <Link
              href={{
                pathname: `/series/${mov.id}`,
                query: {
                  show: tvshow,
                },
              }}
              key={mov.id}
            >
              <div className={` w-full`}>
                <div className={`relative focus-visible:outline-none outline-[rgb(0,0,0,0)] outline outline-2 outline-offset-[-2px] transition-all duration-300 hover:outline-[#663399]`}>
                  <Image width={360} height={200} src={requests.imgBase + mov.backdrop_path} alt={mov.title || mov.original_name} />
                  <div className='absolute inset-0 group/btn bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.0)] transition-all duration-300'>
                    <div className='opacity-0 absolute group-hover/btn:opacity-100 bottom-0 right-0 pr-4 pb-3 flex items-center transition-all duration-300'>
                      <button aria-label='Play' className='rounded-full flex justify-center items-center p-[2px] bg-slate-300 hover:bg-white hover:scale-110'>
                        <BiPlay className='relative left-[2px] w-8 h-8' />
                      </button>
                      <button aria-label='adicionar a minha lista' className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
                        <HiPlus className=' w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GeneroGrid;
