import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MovieDetail from "./component/MovieDetail/MovieDetail";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/movie-app" element={<Home />} />
            <Route path="/movie/:imdbId" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
