import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { videoList } from "../actions/videoActions";

export default function SearchBox(props) {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(videoList(term));
  };
  useEffect(() => {
    if (term === "") {
      dispatch(videoList("Web developer"));
    }
  }, [dispatch, term]);

  return (
    <div className="search">
      <Link to="/">
        <div className="search__logo">
          <i className="fab fa-youtube"></i> Youtube
        </div>
      </Link>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={term}
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
