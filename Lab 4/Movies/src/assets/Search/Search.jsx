import "./Search.css";

export default function Search({ onSearch  , searchTerm}) {
  function handleOnChange(e) {
    onSearch(e.target.value);
  }

  function handleSearch(e) {
    alert("Ok " + searchTerm);
  }

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Enter name..."
        onChange={handleOnChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div>{searchTerm}</div>
    </div>
  );
}
