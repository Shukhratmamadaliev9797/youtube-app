import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import SelectedVideo from "./components/SelectedVideo";
import Videos from "./components/Videos";
import "./app.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <SearchBox />
        <div className="home__body">
          <Route path="/" exact component={Videos} />
          <Route path="/video/:id" exact component={SelectedVideo} />
        </div>
      </div>
    </BrowserRouter>
  );
}
