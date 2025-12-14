import { FaLayerGroup } from "react-icons/fa";
import SnippetItem from "./SnippetItem";

export default function SnippetList({ snippets }) {
  if (!snippets.length) {
    return <p style={{ opacity: 0.7 }}>No snippets found.</p>;
  }

  return (
    <section>
      <h2>
        <FaLayerGroup /> Snippets ({snippets.length})
      </h2>

      {snippets.map(snippet => (
        <SnippetItem key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}
