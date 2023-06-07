/* eslint-disable @next/next/no-img-element */
import requests from '@/utils/requests';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import { BiPlay } from 'react-icons/bi';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import SingleMovieBanner from './SingleMovieBanner';

const Banner = ({ popularMovies, individual, movie, trailer, show }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} before:content-none right-[22px] z-1`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <SlArrowRight className='hidden group-hover:block w-6 h-6 text-white' />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} before:content-none left-[22px] z-[11]`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <SlArrowLeft className='hidden group-hover:block w-6 h-6 text-white' />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          bottom: '10px',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul className='[&>li]:mx-[2px]' style={{ margin: '0px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className='bgcolor w-2 h-2 mx-0 bg-[#ffffff80] rounded-full '></div>,
  };

  return (
    <div className='group'>
      <Slider {...settings}>
        {individual ? (
          <SingleMovieBanner movie={movie} show={show} individual={individual} trailer={trailer} />
        ) : (
          popularMovies.map((item) => {
            return (
              <div key={item.id} className='h-[90vh] focus-visible:outline-none relative bg-bannerImg '>
                <div className='absolute h-[90vh] inset-0 bg-bannerImg'></div>
                <Image priority width={1920} height={1200} className='h-[90vh] w-full object-cover focus-visible:border-none' src={requests.imgBase + item.backdrop_path} alt={item.title} />
                <div className='absolute bottom-[80px] text-white px-3 pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] w-full'>
                  <h2 className='text-center sm:text-left font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl sm:w-[30ch] mb-3'>{item.title}</h2>
                  <p className=' parrafo text-center sm:text-left max-w-[800px] sm:pr-4 sm:mb-6 text-ellipsis overflow-hidden md:text-lg sm:whitespace-nowrap '>{item.overview}</p>
                  <div className=' gap-5 items-center hidden sm:flex'>
                    <button aria-label='Play' className='border-2 border-white rounded-full flex justify-center items-center p-2 hover:border-[#663399] hover:bg-black'>
                      <BiPlay className='w-9 h-9' />
                    </button>
                    <Link href={'filmes/' + item.id}>
                      <button aria-label='Mas Información' className='px-[20px] bg-[#3e3b44b3] min-h-[4px] min-w-[144px] py-[12px] rounded-[4px] hover:border-[#663399] hover:border-2 hover:bg-black font-semibold'>Detalhes</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </Slider>
    </div>
  );
};

export default Banner;
