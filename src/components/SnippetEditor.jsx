import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function SnippetEditor({ addSnippet }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !code) return;

    const snippet = {
      id: Date.now(),
      title,
      code,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    };

    addSnippet(snippet);

    setTitle("");
    setCode("");
    setTags("");
  }

  return (
    <div className="editor">
      <h2>
        <FaPlus /> Add Snippet
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Snippet Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Code..."
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <button type="submit">Add Snippet</button>
      </form>
    </div>
  );
}
