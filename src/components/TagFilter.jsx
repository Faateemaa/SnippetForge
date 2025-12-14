import { FaTags } from "react-icons/fa";

export default function TagFilter({ snippets, selectedTag, setSelectedTag }) {
  const tags = [...new Set(snippets.flatMap(s => s.tags))];

  return (
    <div className="tags-filter">
      <FaTags />
      <select
        value={selectedTag}
        onChange={e => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
