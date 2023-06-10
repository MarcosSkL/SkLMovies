import Link from 'next/link';
import React from 'react';

export const Tendencia = () => {
  return (
    <div className='pr-4 text-center custom:text-left tracking-[-0,05em] custom:tracking-normal'>
      <h3 className='text-gray-200 font-bold text-xs  custom::text-sm'>TOP 10</h3>
      <h3 className='text-white font-semibold text-lg custom:text-[33px] custom:mb-3 custom:mt-1 '>Tendencia</h3>
      <p className='text-white  min-w-[300px] max-w-[300px] custom:max-w-[380px] custom:mx-0 mx-auto text-sm custom:text-base'>Os Filmes mais vista das Plataformas de Streming, nao perca!</p>
      <Link href='/filmes'>
        <button aria-label='Explorar' className='px-[20px] bg-[#3e3b44b3] min-h-[4px] min-w-[144px] py-[10px] rounded-[4px] border-2 border-transparent hover:border-[#663399] hover:border-2 hover:bg-black font-semibold text-white mt-6'>Mais Vistos</button>
      </Link>
    </div>
  );
};

