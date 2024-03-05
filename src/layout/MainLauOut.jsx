import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeLoading from "../shared/HomeLoading/HomeLoading";

export default function MainLauOut() {
  const [time, setTime] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    }, 1000);
  }, []);
  return (
    <>
      {time ? (
        <HomeLoading />
      ) : (
        <div className="bg-[#EEE] dark:bg-[#0f172a]">
          <Outlet />
        </div>
      )}
    </>
  );
}
