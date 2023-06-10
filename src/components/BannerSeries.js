/* eslint-disable @next/next/no-img-element */
import requests from '@/utils/requests';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import { BiPlay } from 'react-icons/bi';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import SingleSeriesBanner from './SingleSeriesBanner';

const BannerSeries = ({ popularMovies, individual, serie, trailer, show }) => {
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
    className: "center",
    centerPadding: "50px",
    centerMode:false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
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
          <SingleSeriesBanner serie={serie} show={show} individual={individual} trailer={trailer} />
        ) : (
          popularMovies.map((serie) => {
            return (
              <div key={serie.id} className='h-full focus-visible:outline-none relative bg-bannerImg '>
                <div className='absolute h-full inset-0 bg-bannerImg'></div>
                <Image priority width={1920} height={1200} className='h-[90vh] w-full object-cover focus-visible:border-none' src={requests.imgBase + serie.backdrop_path} alt={serie.name} />
                <div className='absolute bottom-[80px] text-white px-3 pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] w-full'>
                  <h2 className='font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-3'>{serie.name}</h2>
                  <p className='sm:text-left sm:pr-4 sm:mb-6 text-ellipsis overflow-hidden md:text-lg'>{serie.overview}</p>
                  <div className='gap-5 items-center hidden sm:flex'>
                    <button aria-label='Play' className='border-2 border-white rounded-full flex justify-center items-center p-2 hover:border-slate-200 hover:border-2 hover:bg-gray-400'>
                      <BiPlay className='w-9 h-9' />
                    </button>
                    <Link href={'series/' + serie.id}>
                      <button aria-label='Detalhes' className='px-[20px] bg-[#3e3b44b3] min-h-[4px] min-w-[144px] py-[12px] rounded-[200px] text-slate-50 hover:bg-gray-400 font-semibold'>Detalhes</button>
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

export default BannerSeries;
