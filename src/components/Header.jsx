import logo from "../assets/Rick_and_Morty_logo.png";

export default function Header({ setPageIndex, setName }) {
  return (
    <>
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
    </>
  );
}
