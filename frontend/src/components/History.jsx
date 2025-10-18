import { useEffect, useState } from "react";
import axios from "axios";
import '../css/history.css'
export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/history")
      .then((res) => {
        setHistory(res.data); // assuming res.data is an array
      })
      .catch((err) => {
        console.error("Error fetching history:", err);
      });
  }, []);

  return (
    <div className="container">
      <h1>History</h1>
      {history.length === 0 ? (
        <p>No history found.</p>
      ) : (
        history.map((hist, index) => (
          <div key={index} className="history-item">
            <p><strong>Score:</strong> {hist.score}</p>
            <p><strong>Feedback:</strong> {hist.feedback}</p>
            <p><strong>Strength:</strong> {hist.strength}</p>
            <p><strong>Weakness:</strong> {hist.weakness}</p>
            <p><strong>Analyzed At:</strong> {hist.analyzedAt}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
