import React from "react";
import SearchAppBar from "../components/Search";
import ActionAreaCard from "../components/Card";
import "./movies.css";
import { API_KEY, URL } from "../config/env";


export default function Movies() {
  const [movies, setMovies] = React.useState([]);

  const handleChange = async (search) => {
    const response = await fetch(`${URL}?query=${search}&api_key=${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <>
      <SearchAppBar onSearch={handleChange} />
      <div className="movies">
        {movies.map((movie) => (
          <ActionAreaCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </div>
    </>
  );
}
