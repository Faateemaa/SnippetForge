import { FaSearch } from "react-icons/fa";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search">
      <FaSearch />
      <input
        type="text"
        placeholder="Search title, code, or tags..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
