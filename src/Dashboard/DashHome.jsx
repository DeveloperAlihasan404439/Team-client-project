import { useContext } from "react";
import useUsers from "../Hooks/useUsers";
import { AuthContext } from "../provider/AuthProvider";
import "./DashHome.css";
const DashHome = () => {
  const { usersData } = useUsers();
  const { user } = useContext(AuthContext);
  console.log(usersData);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-5 flex justify-between items-center rounded-lg bg-white py-2 px-3">
        <h1 className="text-2xl uppercase tracking-[4px] font-semibold text-[#144248]">
          Dashboard
        </h1>
        <div className="flex items-center gap-5">
          <h1 className="text-lg font-semibold text-[#144248]">
            {user?.displayName}
          </h1>
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-[50%] border-2 border-[#019D90] "
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-6">
        <div className="book">
          <p>Total User : {usersData.length}</p>
          <div className="cover">
            <p>Hover User</p>
          </div>
        </div>
        <div className="book">
          <p>Total Email :</p>
          <div className="cover">
            <p>Hover Emain</p>
          </div>
        </div>
        <div className="book">
          <p>Total Inbox :</p>
          <div className="cover">
            <p>Hover Inbox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
