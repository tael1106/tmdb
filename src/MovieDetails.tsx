import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { getMovieDetails } from './services/my-api';
import { Genre } from './entities/Genre';
import { convertToPercentage } from './services/utils';
import Spinner from './components/Spinner';

export default function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const { data, isError, isLoading } = useQuery(['movieDetails', movieId], () => getMovieDetails(Number(movieId)))


  if (isLoading) {
    return (<div className="text-center p-4">
      <Spinner />
    </div>)
  }
  if (isError) {
    return <span>Error...</span>
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

        <div className="lg:max-w-lg lg:self-end">
          <div className="py-4">
            <Link to="/" className="text-blue-500 underline text-xs">Retour à la liste</Link>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h1>
          </div>


          <section aria-labelledby="information-heading" className="mt-4">

            <div className="space-x-2">
              {data.genres?.map((genre: Genre) =>
              (
                <span className="text-xs text-gray-800 px-2 py-1 font-semibold bg-gray-200 rounded-full" key={genre.id.toString()}>
                  {genre.name}
                </span>
              )
              )}
            </div>
            <div className="py-3 text-sm space-x-2 text-gray-500">
              <span>Evaluation des utilisateurs : </span>
              <span className="font-semibold">{convertToPercentage(data.vote_average)}%</span>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{data.overview}</p>
            </div>


          </section>
        </div>

        {/* Movie image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img src={imageUrl + data.poster_path} alt={data.original_title} className="h-full w-full object-cover object-center" />
          </div>
        </div>


      </div>
    </div>
  )
}
