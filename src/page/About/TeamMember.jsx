import zayed from "../../assets/image/zayed.jpg";
import raju from "../../assets/image/Raju.png";
import ali from "../../assets/image/ali.jpg";
import riad from "../../assets/image/riad.jpg";
import mosh from "../../assets/image/moshiur2.jpg";



import { FaSquareFacebook } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
const TeamMember = () => {
  const members = [
    {
      name: "Ali Hasan",
      education: "Diploma in Computer science and engineering ",
      title: "Frontend",
      img: ali,
    },
    {
      name: " Tanvir Sarkar Riad",
      education: "Tanvir Sarkar Riad",
      img: riad,
      title: "Backend",
    },
    {
      name: "Md. Moshiur Rahman",
      education: " Honors in Botany",
      img: mosh,
      title: "Frontend",
    },
    {
      name: "Riad Hasan Raju",
      education: " Bachelor of Arts Honors (First year)",
      img: raju,
      title: "Frontend ",
    },

    {
      name: "Zayed Iqbal",
      education: "B.Sc  Honors in Physics (2nd year)",
      img: zayed,
      title: "Full-Stack",
    },
  ];
  return (
    <div className="grid gap-10  mx-auto sm:grid-cols-2 lg:grid-cols-5">
      {members.map((member) => (
        <div className="h-[450px] relative" key={member.img}>
          <div className="h-72 border-2  rounded shadow">
            <div className="relative w-full h-full">
              {/* <div className="absolute inset-0 bg-gradient-to-r  z-10 from-[#019D90] to-[#019D90] rounded"></div> */}
              <img
                className="object-fit  z-40 w-full h-full rounded"
                src={member.img}
                alt="Person"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 text-center">
            <p className="text-lg font-bold  ">{member.name}</p>
            <p className=" py-1 text-sm  ">{member.education}</p>
            <p className="mb-2 text-sm "> <span className="font-medium">Position :</span>  <span className="text-[#019D90] font-semibold">{member.title} </span></p>

            <div className="flex absolute bottom-1 left-[45%] right-[45%] cursor-pointer  items-center space-x-3 justify-center">
              <p className="text-3xl text-[#019D90]">
                <FaSquareFacebook />
              </p>
              <p className="text-3xl text-[#019D90]">
                <SiLinkedin />
              </p>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
