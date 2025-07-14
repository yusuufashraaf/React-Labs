import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";

const initialState = {
  movie: null,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, movie: action.payload };
    case "erro":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function MovieDetails() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchMovie = async () => {
      dispatch({ type: "start" });

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=87c450188396ab920448a99caccd81b4`
        );
        const data = await res.json();
        dispatch({ type: "success", payload: data });
      } catch (error) {
        dispatch({ type: "erro", payload: error.message });
      }
    };

    fetchMovie();
  }, [id]);

  const { movie, loading, error } = state;

  if (loading) return <div>Loading movie...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  const genreList = movie.genres?.reduce((acc, curr, index) => {
    return acc + (index ? ", " : "") + curr.name;
  }, "");

  return (
    <div className="movie-detail-container">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>Genres:</strong> {genreList || "N/A"}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
    </div>
  );
}
