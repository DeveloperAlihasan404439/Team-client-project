import { PieChart, Pie, Cell,Tooltip } from "recharts";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useArticle from "../../Hooks/useArticle";

const PieChartArticle = () => {
  const axiosPublick = useAxios()
  const [comments, setComments] = useState([])
  const [payments, setPayments] = useState([])
  useEffect(()=>{
    axiosPublick.get('/comment').then(res =>{
      setComments(res.data)
    })
  },[axiosPublick])
  useEffect(()=>{
    axiosPublick.get('/payments').then(res =>{
      setPayments(res.data)
    })
  },[axiosPublick])

  const { article } = useArticle();
  const confrimArticle = article.filter(confirm => confirm.status==="confrom")
  const articleLength = confrimArticle?.length;
  const commentsLength = comments?.length;
  const paymentsLength = payments?.length;
  console.log(payments)

  let likes = 0;
  const likesArticle = article?.filter((likesArticle) => likesArticle.like > 0);
  for (let i = 0; i < likesArticle.length; i++) {
    likes = likes + likesArticle[i].like;
  }

  const data = [
    { name: "Article", value: articleLength },
    { name: "Likes", value: likes },
    { name: "payment", value: paymentsLength }, 
    { name: "Comments", value: commentsLength},
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="w-11/12 mx-auto lg:flex gap-2 mt-[36.5rem] md:mt-0">
      <div className="w-full lg:w-[40%] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 overflow-hidden flex justify-center items-center dark:bg-[#28374E]">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="w-full lg:w-[60%] h-[400px] mt-5 lg:mt-0 p-5 shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 dark:bg-[#28374E]">
        <div className="scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#00C49F] h-[97%] overflow-y-scroll">
          {confrimArticle?.map((articles) => (
            <div
              key={articles._id}
              className="mb-2 pb-3 border-b border-[#144248] flex items-center gap-5 dark:border-[#192331]"
            >
              <img src={articles.img} alt="" className="w-12 h-12 rounded-full " />
              <h1 className="pr-4 text-left dark:text-slate-100">{articles.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartArticle;
