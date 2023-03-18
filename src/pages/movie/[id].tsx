import { useRouter } from 'next/router';
import { Result } from '../../interfaces/index';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';



const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const MovieDetails = () => {

  const [movie, setMovie] = useState<Result>({} as Result)
  const router = useRouter();
  const { id } = router.query

  const imageSrc = movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/spinner.svg';

  const releaseDate = movie.release_date ? new Date(movie.release_date).toLocaleDateString() : movie.first_air_date ? new Date(movie.first_air_date).toLocaleDateString() : '';
  useEffect(() => {
    const getMovie = async () => {

      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      const movie = await res.json();
      setMovie(movie)

    }

    if (id) {
      getMovie();
    }

  }, [id])


  return (
    <Layout>
      <div className='w-full'>
        <div className="p-4 md:pt-8 flex flex-col md:flex-row 
        items-center content-center max-w-6xl mx-auto md:space-x-5 ">
          <Image
            src={imageSrc}
            alt={`image ${movie.title}`}
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL='/spinner.svg'
            className='rounded-lg'
          />

          <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>
          <span className='font-semibold mr-1'>Overview: </span>{movie.overview}
          </p>
          <p className='mb-3'>
           <span className='font-semibold mr-1'>Date Released: </span> {releaseDate}
          </p>
          <p className='mb-3'>
           <span className='font-semibold mr-1'>Rating: </span> {movie.vote_count}
          </p>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default MovieDetails;