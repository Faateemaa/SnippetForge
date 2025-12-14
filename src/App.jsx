import { useState, useEffect } from "react";
import Header from "./components/Header";
import SnippetEditor from "./components/SnippetEditor";
import SnippetList from "./components/SnippetList";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import snippetsData from "./data/snippets";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [snippets, setSnippets] = useState(() => {
    const saved = localStorage.getItem("snippets");
    return saved ? JSON.parse(saved) : snippetsData;
  });

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  const filteredSnippets = snippets.filter((snippet) => {
    const search = query.toLowerCase();

    const matchesSearch =
      snippet.title.toLowerCase().includes(search) ||
      snippet.code.toLowerCase().includes(search) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(search));

    const matchesTag = selectedTag ? snippet.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  function addSnippet(snippet) {
    setSnippets((prev) => [snippet, ...prev]);
  }

  return (
    <>
      {/* Header outside the app container */}
      <Header />

      <div className="app">
        <SearchBar query={query} setQuery={setQuery} />
        <TagFilter
          snippets={snippets}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <SnippetEditor addSnippet={addSnippet} />
        <SnippetList snippets={filteredSnippets} />
      </div>

      <Footer />
    </>
  );
}
