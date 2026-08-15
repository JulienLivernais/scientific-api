import { useState } from "react";
import { getStats } from "../api";

function StatsForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const numbers = input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (numbers.length === 0) {
      setError("Enter at least one valid number");
      setResult(null);
      return;
    }

    setError(null);
    setResult(null);

    try {
      const data = await getStats(numbers);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="search">
      <h2>Statistics</h2>
      <p className="hint">4, 8, 15, 16 → mean 10.75</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Numbers separated by commas: 4, 8, 15, 16"
        />
        <button type="submit">Compute</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="notion-card">
          <p className="detail">Mean: <strong>{result.mean.toFixed(2)}</strong></p>
          <p className="detail">Median: <strong>{result.median.toFixed(2)}</strong></p>
          <p className="detail">Variance: <strong>{result.variance.toFixed(2)}</strong></p>
        </div>
      )}
    </section>
  );
}

export default StatsForm;