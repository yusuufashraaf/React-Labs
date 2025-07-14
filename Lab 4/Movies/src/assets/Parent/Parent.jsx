import { useState } from "react";
import Search from "../Search/Search";
import MoviesAPI from "../Movie/MoviesAPI";

export default function Parent() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Search onSearch={setSearchTerm} searchTerm = {searchTerm} />
      <MoviesAPI searchTerm={searchTerm} />
    </div>
  );
}
