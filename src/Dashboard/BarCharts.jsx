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
const BarCharts = () => {
  const data = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Week 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Week 6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Week 7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Week 8",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="mt-10 w-full flex justify-center">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#144248" />
        <Bar dataKey="uv" stackId="a" fill="#079F92" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
