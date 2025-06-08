// components/FertilizerByYearDashboard.jsx
import React, { useState } from "react";
import FertilizerYearlyChart from "./FertilizerYearlyChart";
import { data } from "../../data";

const uniqueYears = [...new Set(data.map(item => item._year))];

const FertilizerByYearDashboard = () => {
  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Fertilizer Availability & Requirement by Year
      </h2>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <label htmlFor="year-select" style={{ marginRight: "0.5rem", fontWeight: "bold" }}>
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        >
          {uniqueYears.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <FertilizerYearlyChart selectedYear={selectedYear} />
    </div>
  );
};

export default FertilizerByYearDashboard;
