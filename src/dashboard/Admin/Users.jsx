import { FaUsers, FaUserNurse } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import "./Users.css";
import Swal from "sweetalert2";
import useUsers from "../../Hooks/useUsers";
import useAxios from "../../Hooks/useAxios";
const Users = () => {
  const { usersData, refetch } = useUsers();
  const axiosPublick = useAxios();
  function hendalUserUpdated(id) {
    axiosPublick.patch(`/users?id=${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull User Updated",
          showConfirmButton: false,
          background: "#144248",
          color: "#EEEEEE",
          timer: 2000,
        });
      }
    });
  }
  return (
    <div className="w-11/12 md:max-w-5xl mx-auto my-5 md:my-10">
      <h1 className="text-xl md:text-4xl font-bold text-[#144248] text-center">
        Effortless User <span className=" text-[#019D90]  ">Management</span>
      </h1>
      <p className=" text-center font-inter text-[#144248] mt-4 mb-10">
        Dive into the admin panel for a seamless user management experience.{" "}
        <br /> Explore detailed user profiles, track activities, and make
        informed decisions. Our intuitive interface <br /> ensures efficient
        control,
      </p>
      <h1 className="px-10 flex justify-between text-xl text-[#144248] font-semibold">
        Total People : {usersData?.length}
      </h1>
      <div className="flex w-full justify-center md:justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 mt-10">
          {usersData?.map((data) => (
            <div
              key={data._id}
              className="e-card playing flex flex-col justify-center"
            >
              <div className="image"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop h-full bg-[#eeeeee] relative">
                <div className="flex justify-center w-full p-5 absolute -top-[80px]">
                  <img
                    src={data.photoURL}
                    alt=""
                    className="w-[100px] h-[100px] rounded-[50%] border-2"
                  />
                </div>
                <h1 className="text-[#144248] mt-12 font-medium">
                  {data.name}
                </h1>
                <p className="text-[#144248] text-sm">{data.email}</p>
                <div className="flex items-center justify-between px-10 mt-8 text-3xl text-[#144248]">
                  <h1>
                    {data?.role === "admin" ? <FaUserNurse /> : <FaUsers />}
                  </h1>
                  <button onClick={() => hendalUserUpdated(data._id)}>
                    <MdBrowserUpdated />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
