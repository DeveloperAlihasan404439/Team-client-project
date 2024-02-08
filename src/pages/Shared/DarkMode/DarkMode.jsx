
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

const ToggleButton = styled.button`
   
  color: ${(props) => (props.darkMode ? "white" : "white")};
  padding: 4px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#141414" : "white";
    document.body.style.color = darkMode ? "white" : "#000E14E8";

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  }; 

  return (
    <ToggleButton darkMode={darkMode} onClick={handleToggle}>
      {darkMode ? <BsFillSunFill className="text-2xl"></BsFillSunFill> : <BsMoon  className="text-2xl  text-[#13756d]"></BsMoon>}
    </ToggleButton>
  );
};

export default DarkMode;