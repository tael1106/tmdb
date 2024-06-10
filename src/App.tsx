import { SingleMovie } from "./components/SingleMovie"
import { useQuery } from "react-query";
import { getTrendingMovies } from "./services/my-api";
import { Movie } from "./entities/Movie";
import React, { useState } from "react";
import { translateTimeWindow } from "./services/utils";
import Spinner from "./components/Spinner";



export default function App() {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day")
  const { data: trendingMovies, error, isError, isLoading } = useQuery<Movie[]>(['trendingMovies', timeWindow], () => getTrendingMovies(timeWindow))

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeWindow(event.target.value as 'day' | 'week');
  }

  if (isLoading) {
    return (<div className="text-center p-4">
      <Spinner />
    </div>)
  }

  if (isError) {
    return (<div className="text-center p-4">
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <div className="mt-2 text-sm text-red-700">
              {error?.message}
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Films par TMDB</h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            Listes des tendances de la {translateTimeWindow(timeWindow)}
          </p>
          <div>
            <select
              id="timeWindow"
              name="timeWindow"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={timeWindow} onChange={handleChange}
            >
              <option value="day">Journée</option>
              <option value="week">Semaine</option>
            </select>
          </div>

        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {trendingMovies?.map((movie: Movie) => (
            <SingleMovie
              key={movie.id.toString()}
              id={movie.id}
              title={movie.title}
              original_title={movie.original_title}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>

  )
}