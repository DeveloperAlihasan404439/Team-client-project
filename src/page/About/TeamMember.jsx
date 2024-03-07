import zayed from "../../assets/image/zayed.jpg";
import raju from "../../assets/image/Raju.png";
import ali from "../../assets/image/ali.jpg";
import riad from "../../assets/image/riad.jpg";
import mosh from "../../assets/image/moshiur2.jpg";



import { FaSquareFacebook } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
const TeamMember = () => {
  const members = [
    {
      name: "Ali Hasan",
      education: "Diploma in Computer science and engineering ",
      title: "Full Stack",
      facebook : 'https://www.facebook.com/alihasan404439',
      linkedin : 'https://www.linkedin.com/in/ali-hasan-409845256',
      img: ali,
    },
    {
      name: " Tanvir Sarkar Riad",
      education: "Tanvir Sarkar Riad",
      linkedin : 'https://www.linkedin.com/in/riad-sarkar-frontend-dev',
      facebook : 'https://www.facebook.com/riad.sarkar.92?mibextid=ZbWKwL',
      img: riad,
      title: "Backend",
    },
    {
      name: "Md. Moshiur Rahman",
      education: " Honors in Botany",
      facebook : 'https://www.facebook.com/moshiurshak.mosheur?mibextid=ZbWKwL',
      linkedin : 'https://www.linkedin.com/in/moshiur003',
      img: mosh,
      title: "Frontend",
    },
    {
      name: "Riad Hasan Raju",
      education: " Bachelor of Arts Honors (First year)",
      facebook : 'https://www.facebook.com/profile.php?id=100007355355842&mibextid=ZbWKwL',
      linkedin : 'https://www.linkedin.com/in/urraju-frontend',
      img: raju,
      title: "Frontend ",
    },
    
    {
      name: "Zayed Iqbal",
      education: "B.Sc  Honors in Physics (2nd year)",
      facebook : 'https://www.facebook.com/ZxAYED?mibextid=ZbWKwL',
      linkedin : 'https://www.linkedin.com/in/zayed-iqbal',
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
              <img
                className="object-fit  z-40 w-full h-full rounded"
                src={member.img}
                alt="Person"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 text-center">
            <p className="text-lg font-bolddark:text-white dark:text-white">{member.name}</p>
            <p className=" py-1 text-sm dark:text-slate-400">{member.education}</p>
            <p className="dark:text-slate-400">PortFolio Link-</p>
            <div className="flex absolute bottom-1 left-[45%] right-[45%] cursor-pointer  items-center space-x-3 justify-center">
              <Link to ={member.facebook} className="text-3xl text-[#019D90] P-2 dark:text-slate-400">
                <FaSquareFacebook className="h-8 w-8"/>
              </Link>
              <Link  to ={member.linkedin} className="text-3xl text-[#019D90] P-2 dark:text-slate-400">
                <SiLinkedin className="h-7 w-7"/>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
