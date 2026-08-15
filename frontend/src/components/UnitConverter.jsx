import { useState } from "react";
import { convertUnit } from "../api";

const PAIRS = [
  { id: "km-miles", label: "km → miles" },
  { id: "kg-pounds", label: "kg → pounds" },
  { id: "c-f", label: "°C → °F" },
];

function UnitConverter() {
  const [value, setValue] = useState("");
  const [pair, setPair] = useState("km-miles");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;

    setError(null);
    setResult(null);

    const [unitFrom, unitTo] = pair.split("-");

    try {
      const data = await convertUnit(value, unitFrom, unitTo);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="search">
      <h2>Unit converter</h2>
      <p className="hint">100 km → 62.14 miles</p>

      <div className="pair-group">
        {PAIRS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={pair === p.id ? "pill active" : "pill"}
            onClick={() => setPair(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
        />
        <button type="submit">Convert</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="notion-card">
          <p className="result">
            {result.result.toFixed(2)} {result.to}
          </p>
          <p className="detail">
            {result.value} {result.from}
          </p>
        </div>
      )}
    </section>
  );
}

export default UnitConverter;