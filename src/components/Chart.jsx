import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = ({ bookInfo }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 my-8">
        <h3
          className="text-xl font-bold mb-4 text-center"
          style={{ color: "#1a535c" }}
        >
          Book Ratings
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bookInfo}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="title"
              angle={-45}
              textAnchor="end"
              height={150}
              interval={0}
            />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="rating" fill="#1a535c" name="Rating" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
