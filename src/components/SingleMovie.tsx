import { Movie } from '../entities/Movie';

export const SingleMovie = (movie: Movie) => {
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <article key={movie.id.toString()} className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <a href={"movie/" + movie.id.toString()}>
          <img
            src={imageUrl + movie.backdrop_path}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </a>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={movie.release_date} className="text-gray-500">
            {movie.release_date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={"movie/" + movie.id.toString()}>
              <span className="absolute inset-0" />
              {movie.title}
            </a>
          </h3>
          {
            movie.overview ??
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{movie.overview}</p>
          }
        </div>
      </div>
    </article>
  )
}
