import { useEffect, useState } from "react";
import ArticalCard from "./ArticalCard";

const PopularArtical = () => {
  const [artical, setArtical] = useState([]);
  useEffect(() => {
    fetch("/artical.json")
      .then((res) => res.json())
      .then((data) => setArtical(data));
  }, []);
  return (
    <div className="mt-20 my-20 px-1 md:px-0">
      <div className="flex flex-col font-inter justify-center items-center">
        <h1 className="text-4xl font-bold">
          Popular <span className="text-cyan-600">Artical</span>
        </h1>
        <p className="text-black text-center  mt-5">
          Have a disposable mail address system set up in a fantastic way to
          make sure when you participate <br /> in online wikis, chat rooms,
          never disclosed and never sold to <br /> anyone to avoid mail spam with
          Temp-mail.org.
        </p>
      </div>
      <div className="max-w-screen-xl mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {artical?.map((item) => (
          <ArticalCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularArtical;
