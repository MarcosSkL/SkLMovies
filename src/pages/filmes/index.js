import BannerFilmes from '@/components/BannerFilmes';
import CarouselFilmes from '@/components/CarouselFilmes';
import requests from '@/utils/requests';
import Head from 'next/head';

const Filmes = ({ popularMovies, forYou, bestMovies, upcomingMovies }) => {
  return (
    <>
      <Head>
        <title>Movies SkL</title>
        <meta name='description' content='Desarrollado por Martín Morici' />
      </Head>
      <div className='pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] pt-28'>

      <BannerFilmes popularMovies={popularMovies.slice(0,6)} />

        <CarouselFilmes titulo={'Filmes Popular'} best={true} movies={popularMovies} slides={5} />
        <CarouselFilmes titulo={'Melhores Filmes'} best={true} movies={bestMovies} slides={5} />
        <CarouselFilmes titulo={'Proximos Filmes'} best={true} movies={upcomingMovies} slides={5} />
        <CarouselFilmes titulo={'Para voce'} best={true} movies={forYou} slides={5} />

     
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(requests.fetchPopular);
  const data = await res.json();
  const popular = data.results;

  const res2 = await fetch(requests.fetchForYou);
  const data2 = await res2.json();
  const forYouMovies = data2.results;

  const res3 = await fetch(requests.fetchBest);
  const data3 = await res3.json();
  const rated = data3.results;

  const res4 = await fetch(requests.upcoming);
  const data4 = await res4.json();
  const upcoming = data4.results;

  return {
    props: {
      popularMovies: popular,
      forYou: forYouMovies.reverse(),
      bestMovies: rated.reverse(),
      upcomingMovies: upcoming.reverse(),
    },
  };
}

export default Filmes;
