import React from "react";
import { data } from "../../data"; // Your data file
import { getFertilizerStats } from "../../utils";
import "./TopFertilizers.css";

function TopFertilizers() {
  const { topRequired, leastAvailable } = getFertilizerStats(data);

  return (
    <div className="topFertilizers">
      <h2>Top 5 Fertilizers with Most Requirement</h2>
      <table>
        <thead>
          <tr>
            <th>Fertilizer</th>
            <th>Total Requirement (MT)</th>
          </tr>
        </thead>
        <tbody>
          {topRequired.map((item, idx) => (
            <tr key={idx}>
              <td>{item.product}</td>
              <td>{item.requirement.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Top 5 Fertilizers with Least Availability</h2>
      <table>
        <thead>
          <tr>
            <th>Fertilizer</th>
            <th>Total Availability (MT)</th>
          </tr>
        </thead>
        <tbody>
          {leastAvailable.map((item, idx) => (
            <tr key={idx}>
              <td>{item.product}</td>
              <td>{item.availability.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopFertilizers;
