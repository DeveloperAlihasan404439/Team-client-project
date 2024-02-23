import { PieChart, Pie, Cell } from "recharts";
import useArticle from "../../Hooks/useArticle";
import useComments from "../../Hooks/useComments";

const PieChartArticle = () => {
  const { article } = useArticle();
  const { comment } = useComments();
  const commentsLength = comment?.length;
  const articleLength = article?.length;

  let likes = 0;
  const likesArticle = article?.filter((likesArticle) => likesArticle.like > 0);
  for (let i = 0; i < likesArticle.length; i++) {
    likes = likes + likesArticle[i].like;
  }
  console.log(article);

  const data = [
    { name: "Article", value: articleLength },
    { name: "Likes", value: likes },
    { name: "Data", value: likes }, // Unsure about this, you might want to revise
    { name: "Comments", value: commentsLength },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="w-11/12 mx-auto flex gap-2 mb-10">
      <div className="w-[40%] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90">
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
        </PieChart>
      </div>
      <div className="w-[60%] h-[400px] p-5 shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90">
        <div className="scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#00C49F] h-[97%] overflow-y-scroll">
          {article?.map((articles) => (
            <div
              key={articles._id}
              className="mb-2 pb-3 border-b border-[#144248] flex items-center gap-5"
            >
              <img src={articles.img} alt="" className="w-12 h-12 rounded-full " />
              <h1 className="pr-4 text-left">{articles.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartArticle;
