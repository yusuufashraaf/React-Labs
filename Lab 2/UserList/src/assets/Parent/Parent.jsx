import { useState } from "react";
import Search from "../Search/Search";
import UserList from "../Card/Card";

export default function Parent() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Search onSearch={setSearchTerm} searchTerm = {searchTerm} />
      <UserList searchTerm={searchTerm} />
    </div>
  );
}
