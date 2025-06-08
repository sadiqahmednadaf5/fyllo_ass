import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../data";

const COLORS = ["#FF6384", "#36A2EB"];
function FirstChart() {
  const products = [...new Set(data.map((item) => item.product))];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
 

  const filteredData = data.filter((item) => item.product === selectedProduct);

  const totalRequirement = filteredData.reduce(
    (sum, item) => sum + parseFloat(item.requirement_in_mt_ || 0),
    0
  );

  const totalAvailability = filteredData.reduce(
    (sum, item) => sum + parseFloat(item.availability_in_mt_ || 0),
    0
  );

  const pieData = [
    { name: "Requirement (MT)", value: totalRequirement },
    { name: "Availability (MT)", value: totalAvailability },
  ];

  return (
    <div style={{ width: "100%", height: "450px", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" , color:"green" }}>
        {selectedProduct}  <p style={{display:"inline-block",marginLeft:"3px",color:"black"}}> - Availability vs Requirement</p>
      </h2>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          {products.map((product, idx) => (
            <option key={idx} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FirstChart;
