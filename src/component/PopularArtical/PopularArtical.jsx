import { useEffect, useState } from "react";
import ArticalCard from "./ArticalCard";

const PopularArtical = () => {
  const [artical, setArtical] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/article")
      .then((res) => res.json())
      .then((data) => setArtical(data));
  }, []);
  return (
    <div className="mt-20 my-20 px-1 md:px-2">
      <div className="flex flex-col font-inter justify-center items-center">
        <h1 className="text-4xl font-bold text-[#144248] ">
        Article <span className=" text-[#019D90]  ">Hub</span>
        </h1>
        <p className=" text-center font-inter  text-[#144248] font-medium  mt-4">
        Discover the proven methods and  life hacks that successful individualsswear by to boost productivity. <br />  From time management tips to focus-enhancing techniques, this article unveils the key secrets <br /> to achieving more in less time.
        </p>
      </div>
      <div className="max-w-screen-xl mt-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {artical?.map((item) => (
          <ArticalCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default PopularArtical;