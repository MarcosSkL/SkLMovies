import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Slider from 'react-slick';
import { BiPlay } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import BannerFilmes from '@/components/BannerFilmes';
import GeneroGridFilmes from '@/components/GeneroGridFilmes';
import Temporadas from '@/components/Temporadas';
import requests from '@/utils/requests';


const IndividualMovie = ({ movies, movie, genero, titulo, simil, videos, tvshow }) => {
  const [selected, setSelected] = useState(1);
  const [season, setSeason] = useState();

  const similares = simil?.slice(0, 10);
  const trailer = videos?.filter((vid) => vid.type === 'Trailer' && vid.official === true);

  const handleChange = async (e) => {
    setSelected(e.target.value);
    const episodes = await fetch(`https://api.themoviedb.org/3/tv/${movie.id}/season/${e.target.value}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data = await episodes.json();
    setSeason(data);
  };

  const fetchSeason = async () => {
    const episodes = await fetch(`https://api.themoviedb.org/3/tv/${movie.id}/season/${selected}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data = await episodes.json();
    setSeason(data);
  };

  useEffect(() => {
    if (tvshow) {
      fetchSeason();
    }
  }, []);

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

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
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
    ],
  };

  return (
    <>
      <Head>
        <title>Marcos SkL</title>
        <meta name='description' content='Desenvolvido por Marcos Bezerra' />
      </Head>
      {genero ? (
        <GeneroGridFilmes titulo={titulo} tvshow={tvshow} movies={movies} />
      ) : (
        <>
          <BannerFilmes individual={true} movie={movie} show={tvshow} trailer={trailer} />
          <div className='pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] bg-rowGradient mt-[-6px] mb-[50px] group'>
            {tvshow ? <Temporadas handleChange={handleChange} selected={selected} movie={movie} season={season} /> : null}
            {tvshow ? null : <h2 className='font-bold text-white text-xl mb-3 flex items-center'>Filmes recomendados</h2>}

            <Slider {...settings}>
              {similares?.map((movie) => {
                if (movie.poster_path === null || movie.poster_path === null) {
                  return;
                }
                return (
                  <Link
                    href={{
                      pathname: `/filmes/${movie.id}`,
                      query: {
                        show: tvshow,
                      },
                    }}
                    key={movie.id}
                  >
                    <div className={`pr-5 w-full`}>
                      <div className={`relative focus-visible:outline-none outline-[rgb(0,0,0,0)] outline outline-2 outline-offset-[-2px] transition-all duration-300 hover:outline-[#663399]`}>
                        <Image width={360} height={200} src={requests.imgBase + movie.poster_path} alt={movie.title || movie.original_name} />
                        <div className='absolute inset-0 group/btn bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.0)] transition-all duration-300'>
                          <div className='opacity-0 absolute group-hover/btn:opacity-100 bottom-0 right-0 pr-4 pb-3 flex items-center transition-all duration-300'>
                            <button className='rounded-full flex justify-center items-center p-[2px] bg-slate-300 hover:bg-white hover:scale-110'>
                              <BiPlay className='relative left-[2px] w-8 h-8' />
                            </button>
                            <button className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
                              <HiPlus className=' w-5 h-5' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const tit = context.query.titulo;

  if (context.query.genero === 'true') {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&with_genres=${id}`);
    const data = await res.json();
    const movie = data.results;

    return {
      props: {
        movies: movie,
        genero: context.query.genero,
        titulo: tit,
      },
    };
  }

  if (context.query.show === 'true') {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data = await res.json();

    const res3 = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data3 = await res3.json();
    const vids = data3.results;

    return {
      props: {
        movie: data,
        videos: vids,
        tvshow: context.query.show,
      },
    };
  } else {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data = await res.json();

    const res2 = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`);
    const data2 = await res2.json();
    const similar = data2.results;

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
    const data3 = await res3.json();
    const vids = data3.results;

    return {
      props: {
        movie: data,
        simil: similar,
        videos: vids,
        tvshow: false,
      },
    };
  }
}

export default IndividualMovie;
