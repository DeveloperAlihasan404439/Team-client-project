// use time management npm package
import moment from "moment";
moment().format();

const SuggestArticle = ({ suggest,hendelSuggestArticle }) => {

  const { title, description, img, date, publishTime } = suggest;
  
  return (
    <div onClick={()=>hendelSuggestArticle(suggest?.id)}>
        <div className="md:flex gap-y-4 border-l-4 border-[#019D91]  shadow   lg:h-44 gap-4 bg-white items-center p-2 rounded-xl dark:bg-[#212e42] mr-2">
          <img
            className="w-48 rounded-2xl object-cover h-max"
            src={img}
            alt=""
          />
          <div className="dark:text-slate-400">
            <p className="text-[#019D91] font-semibold dark:text-white">
              {title}
            </p>
            <p className="text-sm">{description.slice(0, 68)}</p>
            <p>{moment(date).format("ddd, MMM YYYY")}</p>
            <p>{publishTime}</p>
          </div>
        </div>
    </div>
  );
};
export default SuggestArticle;
