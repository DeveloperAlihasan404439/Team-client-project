

import React, { useState, useEffect } from "react";

const TimeDifference = ({setTime}) => {
     
  
  const [oldDate] = useState(new Date(setTime));
  const [currentTime, setCurrentTime] = useState(new Date());

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
      return `${daysDifference} days`;
    } else if (hoursDifference > 0) {
      return `${hoursDifference} hours`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} minutes`;
    }else{
      return 'Just Now'
    }
  };

  return <p>{calculateTimeDifference()}</p>;
};

export default TimeDifference;