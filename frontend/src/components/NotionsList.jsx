import { useState, useEffect } from "react";
import { getAllNotions } from "../api";

function NotionsList() {
  const [notions, setNotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNotions() {
      try {
        const data = await getAllNotions();
        setNotions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNotions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (notions.length === 0) return <p>No notions found.</p>;

  return (
    <ul className="notions-list">
      {notions.map((notion) => (
        <li key={notion.title} className="notion-card">
          <h3>{notion.title}</h3>
          <p>{notion.description}</p>
          <span className="badge">{notion.category}</span>
        </li>
      ))}
    </ul>
  );
}

export default NotionsList;
