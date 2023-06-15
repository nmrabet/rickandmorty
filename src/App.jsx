import { useState } from "react";
import logo from "./assets/Rick_and_Morty_logo.png";
import CardList from "./components/CardList";
import useSWR from "swr";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const url = "https://rickandmortyapi.com/api/character";
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to fetch users.</div>;
  if (isLoading) return <h2 className="loader">Loading...</h2>;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.results.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="app">
      <img src={logo} alt="Rick and Morty logo" className="logo" />
      <div className="searchbar">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="search"
        />
      </div>
      <CardList details={currentPosts} />
      <Pagination totalPosts={data.results.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
