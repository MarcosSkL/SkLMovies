import BannerSeries from '@/components/BannerSeries';
import CarouselSeries from '@/components/CarouselSeries';
import requests from '@/utils/requests';
import Head from 'next/head';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';



const fetcher = (url) => fetch(url).then((res) => res.json());

const Series = () => {
  const { data: tvPopular } = useSWR(requests.fetchTVPopular, fetcher);
  const { data: topRated } = useSWR(requests.topRated, fetcher);
  const { data: airingToday } = useSWR(requests.airingToday, fetcher);
  const { data: onAir } = useSWR(requests.onAir, fetcher);

  if (!tvPopular || !topRated || !airingToday || !onAir) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Movies SkL</title>
        <meta name='description' content='Desenvolvido por Marcos Bezerra' />
      </Head>
      <div className='pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] pt-28'>

      <BannerSeries popularMovies={tvPopular.results.slice(0,6)} />

        <CarouselSeries titulo={'Series Populares'} tvshow={true} movies={tvPopular.results.slice(0, 10)} slides={5} />
        <CarouselSeries titulo={'Melhores Series'} best={true} tvshow={true} movies={topRated.results.slice(0, 10)} slides={5} />
        <CarouselSeries titulo={'Estreia'} best={true} movies={airingToday.results} slides={5} />
        <CarouselSeries titulo={'Generos'} genero={true} slides={5} />
      </div>
    </>
  );
};

export default Series;