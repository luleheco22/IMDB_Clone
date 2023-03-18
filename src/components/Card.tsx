import React from 'react'
import { Result } from '../interfaces/index';
import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi'

const Card = (result: Result) => {

    const { id, backdrop_path, poster_path, title,
      overview, name, release_date, first_air_date, vote_count } = result;

    const imageSrc = backdrop_path ? `https://image.tmdb.org/t/p/original/${backdrop_path}` : poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : '/spinner.svg';

    const releaseDate = release_date ? new Date(release_date).toLocaleDateString() : first_air_date ? new Date(first_air_date).toLocaleDateString() : '';
  
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
    sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
        <Link href={`/movie/${id}`}>
            <Image
              src={imageSrc}
              alt={`image ${title}`}
              width={500}
              height={300}
              placeholder='blur'
              blurDataURL='/spinner.svg'
              className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
            />
            <div className='p-2'>
               <p className='line-clamp-2 text-md'>{overview}</p>
               <h2 className='truncate text-lg font-bold'>{title || name}</h2>
               <p className='flex items-center'>
                {releaseDate}
                <FiThumbsUp className='h-5 mr-1 ml-3'/>
                {vote_count}
               </p>
            </div>
        </Link>
    </div>
  )
}

export default Card