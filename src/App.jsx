import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import HomeFilm from "./components/HomeFilm";
import Footer from "./components/Footer";
import TvShow from "./components/TvShow";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <BottomBar />
        {/* <HomeFilm />
         */}

        <Routes>
          <Route path="/" element={<HomeFilm />} />
          <Route path="/tv-show" element={<TvShow />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
