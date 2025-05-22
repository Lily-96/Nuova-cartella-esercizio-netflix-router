import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "21692ef4";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) return <p className="text-white">Caricamento...</p>;

  if (!movie || movie.Response === "False") return <p className="text-danger">Errore nel caricamento del film</p>;

  return (
    <div className="container text-white my-4">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="img-fluid my-3" />
      <p>
        <strong>Anno:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genere:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Trama:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Cast:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Regista:</strong> {movie.Director}
      </p>
    </div>
  );
};

export default MovieDetails;
