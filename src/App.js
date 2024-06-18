import React, { useState, useEffect } from 'react';
import './App.css';

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function App() {
  const [sortedData, setSortedData] = useState([...data]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    if (sortBy === "views") {
      const sorted = [...sortedData].sort((a, b) => {
        if (b.views === a.views) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views;
      });
      setSortedData(sorted);
    } else if (sortBy === "date") {
      const sorted = [...sortedData].sort((a, b) => {
        if (new Date(b.date) - new Date(a.date) === 0) {
          return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date);
      });
      setSortedData(sorted);
    }
  }, [sortBy]);

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => setSortBy("date")}>Sort by Date</button>
      <button onClick={() => setSortBy("views")}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((val, index) => (
            <tr key={index}>
              <td>{val.date}</td>
              <td>{val.views}</td>
              <td>{val.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
