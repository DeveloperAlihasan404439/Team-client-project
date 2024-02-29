import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SuggestArticle = ({ suggest }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, img, date, publishTime } = suggest;
  return (
    <div>
      <Link to="/popularartical">
        <div className="lg:flex gap-y-4 border-l-4 border-[#019D91]  shadow   h-44 gap-4 bg-white items-center p-2 rounded-xl">
          <img
            className="w-48 rounded-2xl object-cover h-max"
            src={img}
            alt=""
          />
          <div>
            <p className="text-[#019D91] font-semibold ">{title}</p>
            <p className="text-sm text-gray-700">{description.slice(0, 68)}</p>
            <p>{date}</p>
            <p>{publishTime}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default SuggestArticle;
