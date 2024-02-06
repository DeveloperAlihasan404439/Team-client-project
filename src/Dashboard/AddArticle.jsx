import { useForm } from "react-hook-form";
import Button from "../pages/Shared/Button";
import { useState } from "react";

const AddArticle = () => {
  const [benefitsData, setBenefitsData] = useState("");
  const [benefits, setBenefits] = useState([]);

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
    const addArticle = {
      img: data.img,
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
  };
  return (
    <div className="max-w-5xl my-10">
      <h1 className="text-4xl text-center font-bold text-[#144248] ">
        Add an <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <p className=" text-center font-inter  text-[#144248] font-medium  mt-4">
        Be a part of our community! <br /> shaping a platform of diverse ideas
        and perspectives. Start enriching our <br />
        community with your unique articles.
      </p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#EEEEEE] rounded-xl relative text-left flex justify-start items-start
 p-6 w-full space-y-6"
        >
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Title </label>
              <div>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Title"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Input File </label>
              <div>
                <input
                  {...register("img", { required: true })}
                  type="url"
                  placeholder="Photo Url"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Why To Use</label>
              <div>
                <input
                  {...register("whyToUse", { required: true })}
                  type="text"
                  placeholder="Why To Use"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Use To Help </label>
              <div>
                <input
                  {...register("useToHelp", { required: true })}
                  type="text"
                  placeholder="Use To Help"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 items-center w-full">
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Where To Use </label>
              <div>
                <input
                  {...register("whereToUse", { required: true })}
                  type="text"
                  placeholder="Where To Use"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Date </label>
              <div>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <label className=" mb-2 font-medium  "> Benefits </label>
              <div className="mt-1">
                <select
                  onChange={(e) => setBenefitsData(e.target.value)}
                  className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
                className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              />
            </div>
            <div className="flex justify-center items-center  mt-10">
              <Button
                type="submit"
                className="mx-auto"
                name={"Submit "}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
