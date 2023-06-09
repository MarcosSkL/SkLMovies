/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import requests from '@/utils/requests';
import genres from '@/utils/genres';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import Controls from './Controls';
import { Tendencia } from './Tendencia';

const CarouselSeries = (props) => {
  const { addToList, removeFromList } = useContext(AppContext);

  const handleAddToList = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    addToList(movie);
  };
  const handleRemoveFromList = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromList(movie);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} before:content-none right-[22px] z-1`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <SlArrowRight className='hidden sm:group-hover:block w-5 h-5 text-white' />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} before:content-none left-[22px] z-[11]`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <SlArrowLeft className='hidden sm:group-hover:block  w-5 h-5 text-white' />
      </div>
    );
  }

  let name = 'center overflow-hidden flex-1';
  if (props.tendencia) {
    name = 'center overflow-hidden tendencia mt-4 custom:ml-[0px] lg:ml-[8%] flex-1';
  }

  const settings = {
    className: name,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: props.slides,
    initialSlide: 0,
    speed: 200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: props.slides - 1,
        },
      },
    ],
  };

  return (
    <section className={`${props.gradient ? 'bg-rowGradient' : ''} mt-[-6px] mb-[50px] group row`}>
      <h2 className='ml-[28px] sm:ml-[36px] md:ml-[48px] lg:ml-[60px] font-bold text-white text-xl mb-3 flex items-center'>{props.titulo}</h2>
      <div className={`slider-container  ${props.tendencia ? 'custom:bg-[url(../public/bgtendencia.webp)] custom:bg-[-55px] bg-contain custom:flex items-center pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px]' : ''}`}>
        {props.tendencia ? <Tendencia /> : null}
        <Slider {...settings}>
          {(props.genero ? genres : props.similar ? props.similar : props.movies).map((movie, series) => {
            if (movie.poster_path === null || movie.backdrop_path === null) {
              return null;
            }
            return (
              <Link
                href={{
                  pathname: `/series/${movie.id}`,
                  query: {
                    show: props.tvshow,
                    genero: props.genero,
                    titulo: movie.alt,
                  },
                }}
                key={movie.id}
              >
                <div className={`pr-5 w-full ${props.tendencia ? 'custom' : ''}`}>
                  <div className={`relative focus-visible:outline-none outline-[rgb(0,0,0,0)] outline outline-2 outline-offset-[-2px] transition-all duration-300 hover:outline-[#663399]`}>
                    <Image width={props.genero ? 250 : 360} height={200} src={props.genero ? movie.img.src : props.best || props.tendencia ? requests.imgBase + movie.poster_path : requests.imgBase + movie.backdrop_path} alt={props.genero ? movie.alt : movie.title || movie.name || movie.original_name} />
                    {props.tendencia ? (
                      <div className='absolute z-10 top-0 left-0 w-10 h-6 bg-white rounded-sm text-center flex justify-center items-center'>
                        <span className='text-[12px] font-extrabold pt-[2px]'>#</span>
                        <span className='text-[14px] font-bold'>{index + 1}</span>
                      </div>
                    ) : null}
                    <div className='absolute inset-0 group/btn bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.0)] transition-all duration-300'>{props.genero ? null : <Controls handleAddToList={handleAddToList} handleRemoveFromList={handleRemoveFromList} movie={movie} />} </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSeries;
