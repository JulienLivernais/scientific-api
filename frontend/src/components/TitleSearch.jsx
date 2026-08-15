import { useState } from "react";
import { getNotionByTitle } from "../api";

function TitleSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await getNotionByTitle(trimmed);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="search">
      <h2>Search a concept</h2>
      <p className="hint">Try: gravity, inertia, velocity</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a concept..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p className="error">{error}</p>}

      {results &&
        results.map((notion) => (
          <div key={notion.title} className="notion-card">
            <h3>{notion.title}</h3>
            <p>{notion.description}</p>
          </div>
        ))}
    </section>
  );
}

export default TitleSearch;