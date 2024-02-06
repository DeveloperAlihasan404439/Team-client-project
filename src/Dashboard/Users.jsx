import useUsers from "../Hooks/useUsers";
import { FaUsers,FaUserNurse  } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import "./Users.css";
import Button from "../pages/Shared/Button";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
const Users = () => {
  const { usersData, refetch } = useUsers();
  const axiosPublick = useAxios()
  function hendalUserUpdated(id){
    axiosPublick.patch(`/users?id=${id}`).then((res) => {
      if (res.data.modifiedCount>0) {
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull User Updated",
          showConfirmButton: false,
          background: '#144248',
          color: '#EEEEEE',
          timer: 2000
        }); 
      }
    });
  }
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#144248] text-center">
        Effortless User <span className=" text-[#019D90]  ">Management</span>
      </h1>
      <p className=" text-center font-inter  text-[#144248] font-medium  mt-4 mb-10">
        Dive into the admin panel for a seamless user management experience.{" "}
        <br /> Explore detailed user profiles, track activities, and make
        informed decisions. <br /> Our intuitive interface ensures efficient
        control,
      </p>
      <div>
        <h1 className="px-10 flex justify-between text-xl text-[#144248] font-semibold">
          Total Article : {usersData?.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {
                usersData?.map(data=><div key={data._id} className="e-card playing">
                <div className="image"></div>
    
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
    
                <div className="infotop h-full bg-[#eeeeee] relative">
                    <div className="flex justify-center w-full p-5 absolute -top-[80px]">
                    <img src={data.photoURL} alt="" className="w-[100px] h-[100px] rounded-[50%] border-2"/>
                    </div>
                  <h1 className="text-[#144248] mt-12">{data.name}</h1>
                  <p className="text-[#144248] text-sm">{data.email}</p>
                  <div className="flex items-center justify-between px-10 mt-8">
                    <h1 className="text-3xl text-[#144248]">
                      {
                        data?.role=== "admin"?<FaUserNurse/>:<FaUsers/>
                      }
                      </h1>
                    <button onClick={()=>hendalUserUpdated(data._id)}><Button name={<MdBrowserUpdated />}/></button>
                  </div>
                </div>
              </div>)
            }
          
        </div>
      </div>
    </div>
  );
};

export default Users;
