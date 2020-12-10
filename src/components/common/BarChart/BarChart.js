import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default () => {
  const data = [
    {
      name: "1:00",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "5:00",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "9:00",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "13:00",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5:00",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "13:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <BarChart
      width={345}
      height={150}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* strokeDasharray="3 3" */}
      <CartesianGrid
        stroke="rgba(254, 255, 254, 0.2)"
        strokeDasharray="3 3"
        vertical={false}
      />
      <XAxis dataKey="name" tickMargin="12" axisLine={false} tickLine={false} />
      {/* <YAxis /> */}
      <Tooltip  cursor={{ fill: 'transparent' }} />

      <Bar dataKey="pv" fill="rgba(109, 187, 204, 0.3)" barSize={14} />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
};
