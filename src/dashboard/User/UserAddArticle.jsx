import { useForm } from "react-hook-form";
import {  useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../shared/Auth/useAuth";
import Button from "../../shared/Button";
import useAxios from "../../Hooks/useAxios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  
import "../../shared/ReactDatepicker.css";  

const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

const UserAddArticle = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [benefitsData, setBenefitsData] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [imgLoader, setImgLoader] = useState(false);
  const {user} = useAuth()
  const axiosPublick = useAxios()
  const navigate = useNavigate();
  
  if (!benefits.includes(benefitsData)) {
    if (benefitsData !== "") {
      return setBenefits((e) => [...e, benefitsData]);
    }
  }
  const suggest = [
    {
      id: 1,
      title: "Privacy Mastery with Temporary Emails",
      description:
        "Discover the art of maintaining online privacy using temporary email services. Avoid spam and keep your personal information secure.",
      img: "https://i.ibb.co/XJ8Xmdp/Tmail-1.jpg",
      date: "2024-06-01",
      publishTime: "10:00 AM",
    },
    {
      id: 2,
      title: "Efficient Subscription Management",
      description:
        "Explore effective strategies for using temporary email addresses to manage online subscriptions without cluttering your main inbox.",
      img: "https://i.ibb.co/nDMc2jh/Tmail-3.png",
      date: "2024-06-02",
      publishTime: "11:30 AM",
    },
    {
      id: 3,
      title: "Private Forum Participation",
      description:
        "Learn how temporary email addresses can be employed to participate in online forums while maintaining personal privacy.",
      img: "https://i.ibb.co/4d8ZYRL/Tmail-4.jpg",
      date: "2024-06-03",
      publishTime: "12:45 PM",
    },
    {
      id: 4,
      title: "Navigating Online with Temporary Email Addresses",
      description:
        "Explore the benefits of temporary email services in safeguarding your online privacy and avoiding unnecessary spam.",
      img: "https://i.ibb.co/0qnZWfy/Tmail-6.gif",
      date: "2024-06-04",
      publishTime: "02:15 PM",
    },
    {
      id: 5,
      title: "Secure Communications with Temporary Emails",
      description:
        "Learn how temporary email addresses can enhance the security of your online communications, ensuring anonymous interactions.",
      img: "https://i.ibb.co/djFPrWb/Tmail-7.webp",
      date: "2024-06-05",
      publishTime: "03:30 PM",
    },
  ];
  console.log(benefits);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    
    setImgLoader(true)
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res?.data?.success) {
      setImgLoader(false);
      const hosting = res?.data?.data?.display_url;
      const userArticle = {
        user_Email: user?.email,
        user_Name: user?.displayName,
        user_photo: user?.photoURL,
        img: hosting,
        title: data.title,
        description: data.description,
        shortDescription: data.shortDescription,
        date: startDate,
        whyToUse: data.whyToUse,
        whereToUse: data.whereToUse,
        useToHelp: data.useToHelp,
        benefits,
        suggestArticle: suggest,
        status: "panding",
        like:0
      };
      console.log(userArticle)
      axiosPublick.post("/article", userArticle).then((res) => {
        if (res?.data) {

          reset();
          navigate("/dashboard/user/all/Article");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull User Article added",
            showConfirmButton: false,
            background: "#144248",
            color: "#EEEEEE",
            timer: 2000,
          });
        }
      });
    }
  };


  return (
    <div className="max-w-7xl mx-auto my-5 md:my-10">
      <h1 className="text-2xl md:text-4xl text-center font-bold text-[#144248] dark:text-slate-100">
        Add The User <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <p className=" text-center font-inter text-[#144248] font-medium  mt-4 dark:text-slate-400">
        Be a part of our community! shaping a platform of diverse ideas and
        perspectives.
        <br /> Start enriching our community with your unique articles.
      </p>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#EEEEEE] rounded-xl relative text-left flex justify-start items-start p-6 w-full space-y-3 dark:bg-[#1E293B]"
        >
          <div className="md:flex gap-5 items-center w-full">
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Title{" "}
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Title"
                className="input-text dark:bg-[#28374e]"
              />
            </div>
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Input File{" "}
              </label>
              <div>
                <input
                  {...register("image")}
                  type="file"
                  className="input-file dark:bg-[#28374e] placeholder:text-white"
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Why To Use
              </label>
              <div>
                <input
                  {...register("whyToUse", { required: true })}
                  type="text"
                  placeholder="Why To Use"
                  className="input-text dark:bg-[#28374e]"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Use To Help{" "}
              </label>
              <div>
                <input
                  {...register("useToHelp", { required: true })}
                  type="text"
                  placeholder="Use To Help"
                  className="input-text dark:bg-[#28374e]"
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Where To Use{" "}
              </label>
              <div>
                <input
                  {...register("whereToUse", { required: true })}
                  type="text"
                  placeholder="Where To Use"
                  className="input-text dark:bg-[#28374e]"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Date{" "}
              </label>
              <div className="w-full">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input-text dark:bg-[#28374e] w-full"/>
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                short Description{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("shortDescription", { required: true })}
                  type="text"
                  placeholder="Short Description"
                  className="input-text dark:bg-[#28374e]"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0 md:w-[50%]">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
                {" "}
                Benefits{" "}
              </label>
              <div className="mt-1">
                <select
                  onChange={(e) => setBenefitsData(e.target.value)}
                  className="input-text dark:bg-[#28374e]"
                >
                  <option style={{ backgroundColor: "#144248", color: "#EEE" }}>
                    Select Benefits
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Enhanced online security"
                  >
                    Enhanced online security
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Enhanced online security"
                  >
                    Privacy protection
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Enhanced online security"
                  >
                    Reduced risk of identity theft
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Inbox organization"
                  >
                    Inbox organization
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Improved productivity"
                  >
                    Improved productivity
                  </option>
                  <option
                    style={{ backgroundColor: "#144248", color: "#EEE" }}
                    value="Reduced risk of identity theft"
                  >
                    Reduced risk of identity theft
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full">
              <label className="md:mb-2 tracking-[2px] dark-mode-labal">
              {" "}
              Description{" "}
            </label>
            <div className="mt-1">
              <textarea
                {...register("description", { required: true })}
                cols={20}
                rows={5}
                type="text"
                required=""
                placeholder="Your description"
                className="input-text dark:bg-[#28374e]"
              />
            </div>
            <div className="flex justify-start items-center mt-5 ml-5">
              <Button
                type="submit"
                className="mx-auto"
                name={imgLoader ? "Waiting..." : "Submit "}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddArticle;