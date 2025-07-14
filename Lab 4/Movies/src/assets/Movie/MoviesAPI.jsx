import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "./MoviesAPI.css";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function MoviesAPI({ searchTerm }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "start" });

      const url = searchTerm
        ? `https://api.themoviedb.org/3/search/movie?api_key=87c450188396ab920448a99caccd81b4&query=${searchTerm}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=87c450188396ab920448a99caccd81b4`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        dispatch({ type: "success", payload: result });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    };

    fetchData();
  }, [searchTerm]);

  const { data, loading, error } = state;

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="movies-container">
      <h1>{searchTerm ? `Results for "${searchTerm}"` : "Popular Movies"}</h1>
      <div className="movies-grid">
        {data?.results?.length > 0 ? (
          data.results.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="movie-card-link"
            >
              <div className="movie-card">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>
                    <strong>Release:</strong> {movie.release_date}
                  </p>
                  <p>
                    <strong>Rating:</strong>  {movie.vote_average}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
