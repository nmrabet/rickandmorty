import { useState } from "react";
import CardList from "./components/CardList";
import useSWR from "swr";
import "./App.css";
import Header from "./components/Header";

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [pageIndex, setPageIndex] = useState(1);
  const [name, setName] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${name}`,
    fetcher
  );

  if (error) return <div className="loader">Failed to fetch characters.</div>;

  return (
    <div className="app">
      <Header setPageIndex={setPageIndex} setName={setName} />
      {isLoading ? (
        <h2 className="loader">Loading...</h2>
      ) : (
        <CardList details={data.results} />
      )}
      <div className="pagination">
        <button
          className="pg-btn"
          disabled={pageIndex < 2}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
        <p>{pageIndex === 1 && null}</p>
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
