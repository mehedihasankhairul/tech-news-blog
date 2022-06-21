import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { query, searchNews } = useGlobalContext();
  return (
    <div>
      <h1>Search & Read Tech News</h1>
      <form>
        <div>
          <input type="text" placeholder="Search Topic" value={query} onChange={(e) => searchNews(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default Search;
