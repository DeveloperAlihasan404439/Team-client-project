import { useForm } from "react-hook-form";
import Button from "../pages/Shared/Button";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;
const AddArticle = () => {
  const [benefitsData, setBenefitsData] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [imgLoader, setImgLoader] = useState(false);
  const axiosPublick = useAxios()
  const navigate = useNavigate()
  if (!benefits.includes(benefitsData)) {
    if (benefitsData !== "") {
      setBenefits((e) => [...e, benefitsData]);
    }
  }
  const suggestArticle = [
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
  // console.log(article);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if (res.data.success) {
      setImgLoader(false)
      const photoURL = res?.data?.data?.display_url;
      const addArticle = {
        img: photoURL,
        title: data.title,
        description: data.description,
        shortDescription: data.shortDescription,
        date: data.date,
        whyToUse: data.whyToUse,
        whereToUse: data.whereToUse,
        useToHelp: data.useToHelp,
        benefits,
        suggestArticle,
      };
      axiosPublick.post('/article',addArticle)
      .then((res) => {
        if (res?.data?.insertedId) {
          reset()
          navigate('/dashboard/articleUpdated')
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Article added",
            showConfirmButton: false,
            background: '#144248',
            color: '#EEEEEE',
            timer: 2000
          }); 
        }
      })
    }
    setImgLoader(true)
  };
  
  const styleInput = "mt-1 shadow-sm w-full text-[#144248] px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-none rounded-lg bg-gray-50 focus:outline-none focus:ring-gray-50 focus:ring-offset-gray-300";
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl text-center font-bold text-[#144248] ">
        Add an <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <p className=" text-center font-inter text-[#144248] font-medium  mt-4">
        Be a part of our community!  shaping a platform of diverse ideas
        and perspectives.<br /> Start enriching our
        community with your unique articles.
      </p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#EEEEEE] rounded-xl relative text-left flex justify-start items-start p-6 w-full space-y-3"
        >
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Title </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Title"
                  className={styleInput}
                />
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Input File </label>
              <div>
              <input
                {...register("image")}
                type="file"
                className="file-input mt-1 file-input-bordered file-input-success w-full  focus:outline-none border-none"
              />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Why To Use</label>
              <div>
                <input
                  {...register("whyToUse", { required: true })}
                  type="text"
                  placeholder="Why To Use"
                  className={styleInput}
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Use To Help </label>
              <div>
                <input
                  {...register("useToHelp", { required: true })}
                  type="text"
                  placeholder="Use To Help"
                  className={styleInput}
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Where To Use </label>
              <div>
                <input
                  {...register("whereToUse", { required: true })}
                  type="text"
                  placeholder="Where To Use"
                  className={styleInput}
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Date </label>
              <div>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className={styleInput}
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className="font-medium"> short Description </label>
              <div className="mt-1">
                <input
                  {...register("shortDescription", { required: true })}
                  type="text"
                  placeholder="Short Description"
                  className={styleInput}
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium text-[#144248]  "> Benefits </label>
              <div className="mt-1">
                <select
                  onChange={(e) => setBenefitsData(e.target.value)}
                  className={styleInput}
                >
                  <option>Select Benefits</option>
                  <option value="Enhanced online security">
                    Enhanced online security
                  </option>
                  <option value="Enhanced online security">
                    Privacy protection
                  </option>
                  <option value="Enhanced online security">
                    Reduced risk of identity theft
                  </option>
                  <option value="Inbox organization">Inbox organization</option>
                  <option value="Improved productivity">
                    Improved productivity
                  </option>
                  <option value="Reduced risk of identity theft">
                    Reduced risk of identity theft
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="font-medium"> Description </label>
            <div className="mt-1">
              <textarea
                {...register("description", { required: true })}
                cols={20}
                rows={5}
                type="text"
                required=""
                placeholder="Your description"
                className={styleInput}
              />
            </div>
            <div className="flex justify-start items-center mt-5 ml-5">
              <Button
                type="submit"
                className="mx-auto"
                name={imgLoader?"Waiting...":"Submit "}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
