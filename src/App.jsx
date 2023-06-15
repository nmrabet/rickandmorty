import { useState } from "react";
import logo from "./assets/Rick_and_Morty_logo.png";
import CardList from "./components/CardList";
import useSWR from "swr";
import "./App.css";

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [pageIndex, setPageIndex] = useState(0);
  const [name, setName] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${name}`,
    fetcher
  );

  if (error) return <div>Failed to fetch characters.</div>;

  return (
    <div className="app">
      <img
        src={logo}
        alt="Rick and Morty logo"
        className="logo"
        onClick={() => setPageIndex(1)}
      />
      <div className="searchbar">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search character..."
          className="search"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {isLoading ? (
        <h2 className="loader">Loading...</h2>
      ) : (
        <CardList details={data.results} />
      )}
      <div className="pagination">
        <button
          className="pg-btn"
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
        <p>{pageIndex === 1 ? null : pageIndex - 1}</p>
        <p className="box">{pageIndex}</p>
        <p>{pageIndex + 1}</p>
        <button
          className="pg-btn"
          disabled={pageIndex === 42}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
