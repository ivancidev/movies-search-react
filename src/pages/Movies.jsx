import React, { useEffect } from "react";
import SearchAppBar from "../components/Search";
import ActionAreaCard from "../components/Card";
import "./movies.css";
import { API_KEY, URL } from "../config/env";

export default function Movies() {
  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async (query = "") => {
    const response = await fetch(`${URL}?query=${query}&api_key=${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleChange = (search) => {
    fetchMovies(search);
  };

  return (
    <>
      <SearchAppBar onSearch={handleChange} />
      <div className="movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <ActionAreaCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))
        ) : (
          <p className="no-movies">Busca en el buscador la pelicula</p>
        )}
      </div>
    </>
  );
}
