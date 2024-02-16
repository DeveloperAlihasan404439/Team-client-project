import React, { useState, useEffect } from "react";

const TimeDifference = () => {
  const [oldDate] = useState(new Date("2024-02-15T00:00:00"));
  const [currentTime, setCurrentTime] = useState(new Date());
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const tariq = new Date().getDate();
  const hours = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  const currentTimes = `${year}-${month > 9 ? month : "0" + month}-${
    tariq > 9 ? tariq : "0" + tariq
  }T${hours > 9 ? hours : "0" + hours}:${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }`;
  console.log(currentTimes);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateTimeDifference = () => {
    const difference = currentTime.getTime() - oldDate.getTime();

    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesDifference = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    if (daysDifference > 0) {
      return `${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes,`;
    } else if (hoursDifference > 0) {
      return `${hoursDifference} hours, ${minutesDifference} minutes,`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} minutes,`;
    }
  };

  return <p>{calculateTimeDifference()}</p>;
};

export default TimeDifference;
