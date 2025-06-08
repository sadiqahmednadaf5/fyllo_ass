// components/FertilizerComparisonChart.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { aggregateByFertilizer } from "../../utils";
import { data } from "../../data"; // your actual data

const FertilizerYearlyChart = ({ selectedYear }) => {
  const chartData = aggregateByFertilizer(data, selectedYear);

  return (
    <div style={{ padding: "1rem" }}>
      <h3 style={{ textAlign: "center" }}>
        Fertilizer Requirement vs Availability ({selectedYear})
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requirement" fill="#FF8042" name="Requirement (MT)" />
          <Bar dataKey="availability" fill="#00C49F" name="Availability (MT)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FertilizerYearlyChart;
