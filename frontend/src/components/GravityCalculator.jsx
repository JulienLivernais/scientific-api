import { useState } from "react";
import { calculateGravity } from "../api";

function GravityCalculator() {
  const [mass, setMass] = useState("");
  const [gravity, setGravity] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!mass || !gravity) return;

    setError(null);
    setResult(null);

    try {
      const data = await calculateGravity(mass, gravity);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="search">
      <h2>Gravity force</h2>
      <p className="hint">F = m × g  ·  10 kg × 9.81 = 98.1 N</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="any"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          placeholder="Mass (kg)"
        />
        <input
          type="number"
          step="any"
          value={gravity}
          onChange={(e) => setGravity(e.target.value)}
          placeholder="Gravity (m/s²)"
        />
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="notion-card">
          <p className="result">{result.force} N</p>
          <p className="detail">
            {result.mass} kg × {result.gravity} m/s²
          </p>
        </div>
      )}
    </section>
  );
}

export default GravityCalculator;