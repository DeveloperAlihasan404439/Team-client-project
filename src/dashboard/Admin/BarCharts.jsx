import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import './BarCharts.css'
const BarCharts = ({ usersData }) => {
  const data = [
    {
      name: "Jan",
      uv: 10,
      pv: 5,
    },
    {
      name: "Feb",
      uv: 20,
      pv: 15,
    },
    {
      name: "Mar",
      uv: 14,
      pv: 7,
    },
    {
      name: "Apr",
      uv: 25,
      pv: 17,
    },
    {
      name: "May",
      uv: 9,
      pv: 5,
    },
    {
      name: "Jun",
      uv: 10,
      pv: 11,
    },
    {
      name: "Juy",
      uv: 10,
      pv: 15,
    },
    {
      name: "Aug",
      uv: 2,
      pv: 20,
    },
    {
      name: "Sep",
      uv: 4,
      pv: 52,
    },
    {
      name: "Oct",
      uv: 5,
      pv: 30,
    },
    {
      name: "Nov",
      uv: 2,
      pv: 5,
    },
    {
      name: "Dec",
      uv: 1,
      pv: 0,
    },
  ];
  return (
    <div className="w-11/12 lg:h-[30vh] mx-auto lg:flex  items-center my-10">
      <div className="w-full lg:w-[45%] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 overflow-hidden">
        <div className="w-full flex justify-center">
          <BarChart
            width={500}
            height={230}
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
      </div>
      <div className="w-full lg:w-[55%] md:flex justify-center gap-2 h-[250px] md:mt-10 lg:mt-0">
        <div className="md:w-[330px] shadow-md rounded-xl border-t-2  bg-[#EEE] p-6 text-center z-90 ">
          <div className="scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#00C49F] h-[100%] overflow-y-scroll"> 
            {usersData?.map((users) => (
              <div key={users._id} className="mb-2 pb-3 border-b border-[#144248] flex items-center justify-between">
                <img
                  src={users.photoURL}
                  alt=""
                  className="w-10 rounded-full "
                />
                <h1 className="pr-4">{users.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 md:0 lg:mt-0 shadow-md rounded-xl border-t-2  bg-[#EEE]  p-6 text-center z-90  flex flex-col items-center h-full">
          <div className="relative size-40 bg-[#144248] rounded-full mt-5">
            <svg
              className="size-full"
              width="100%"
              height="100%"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[#EEE] "
                strokeWidth="2"
              ></circle>
              <g className="origin-center -rotate-90 transform">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#017E77] "
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="75"
                ></circle>
              </g>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-2xl font-bold text-[#eee]">
                72%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCharts;
