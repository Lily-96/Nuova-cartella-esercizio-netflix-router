import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_KEY = "21692ef4";

const saghe = [
  { title: "Trending Now", query: "Harry Potter" },
  { title: "Watch it Again", query: "Lord of the Rings" },
  { title: "New Releases", query: "Star Wars" },
];

const MovieGrid = ({ movies }) => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
    {movies.map((movie) => (
      <div className="col mb-2 text-center px-1" key={movie.imdbID}>
        <Link to={`/movie-details/${movie.imdbID}`}>
          <img className="img-fluid" src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} />
        </Link>
      </div>
    ))}
  </div>
);

class HomeFilm extends Component {
  state = {
    filmSaga: {},
  };

  componentDidMount() {
    this.fetchTuttiFilm();
  }

  fetchSagaMovies = async (query) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=1`);
      const data = await res.json();
      return data.Search ? data.Search.slice(0, 6) : [];
    } catch {
      return [];
    }
  };

  fetchTuttiFilm = async () => {
    const results = {};
    for (const saga of saghe) {
      const movies = await this.fetchSagaMovies(saga.query);
      results[saga.title] = movies;
    }
    this.setState({ filmSaga: results });
  };

  render() {
    const { filmSaga } = this.state;

    return (
      <Container fluid>
        {saghe.map(({ title }) => (
          <div key={title}>
            <h4 className="text-white my-3">{title}</h4>
            <MovieGrid movies={filmSaga[title] || []} />
          </div>
        ))}
      </Container>
    );
  }
}

export default HomeFilm;

// MI DISPIACE MA HO PRESO D'ESEMPIO CODICI CERCATI IN QUA E IN LA SU INTERNET PER CERCARE DI FARE IL PIù POSSIBILE
