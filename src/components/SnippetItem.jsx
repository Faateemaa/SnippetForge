import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { FaCopy, FaCode } from "react-icons/fa";

export default function SnippetItem({ snippet }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function copyCode() {
    navigator.clipboard.writeText(snippet.code);
  }

  return (
    <div className="snippet">
      <div className="snippet-header">
        <FaCode />
        <h3>{snippet.title}</h3>
        <button onClick={copyCode}>
          <FaCopy />
        </button>
      </div>

      <pre>
        <code className="language-js">{snippet.code}</code>
      </pre>

      <div className="tags">
        {snippet.tags.map(tag => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
