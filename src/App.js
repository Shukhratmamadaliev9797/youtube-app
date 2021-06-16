import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBox from "./components/SearchBox";

import "./app.scss";
import Home from "./pages/Home";
import SelectedVideo from "./components/SelectedVideo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <SearchBox />
        <Route path="/" exact component={Home} />
        <Route path="/video/:id" exact component={SelectedVideo} />
      </div>
    </BrowserRouter>
  );
}
