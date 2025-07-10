import { useState, useEffect } from "react";
import "./MoviesAPI.css";

export default function MoviesAPI({ searchTerm }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = searchTerm
        ? `https://api.themoviedb.org/3/search/movie?api_key=87c450188396ab920448a99caccd81b4&query=${searchTerm}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=87c450188396ab920448a99caccd81b4`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="movies-container">
      <h1>{searchTerm ? "Results for" + searchTerm : "Popular Movies"}</h1>
      <div className="movies-grid">
        {data?.results?.length > 0 ? (
          data.results.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
