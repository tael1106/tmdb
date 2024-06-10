import { Genre } from "./Genre";

export interface Movie {
  id: Number,
  title: string,
  original_title: string,
  poster_path?: string,
  backdrop_path?: string,
  overview?: string,
  release_date?: string,
  vote_average?: Number,
  vote_count?: Number,
  genre?: Genre[]
}