import Button from "../../pages/Shared/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactInput = () => {
  const handleSubmit = (e) => {
    toast("Mail sent", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
  };
  return (
    <div className="mt-[112px] w-full backdrop-blur rounded-xl">
      <h1 className="text-3xl font-bold pb-4">
        Let's <span className="text-[#019D90]">Connect</span> – Drop Us a Line!
      </h1>
      <p className="pb-8">
        {" "}
        Have a question, suggestion, or just want to say hello? Our virtual
        doors are always open. Fill out the form below, and let the conversation
        begin. Your thoughts matter, and we're here to ensure your Swifty Mail
        experience is nothing short of exceptional
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-[#EEEEEE] rounded-xl relative text-left flex justify-start items-start
 p-6 w-full space-y-6"
      >
        <div className="w-full">
          <label className="  font-medium  "> Your Name </label>
          <div className="mt-1">
            <input
              name="name"
              type="name"
              required=""
              placeholder="Your Name"
              className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="  font-medium  "> Email address </label>
          <div className="mt-1">
            <input
              name="email"
              type="email"
              required=""
              placeholder="Your Email"
              className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="  font-medium  "> Your Message </label>
          <div className="mt-1">
            <textarea
              name="Message"
              cols={20}
              rows={7}
              type="text"
              required=""
              placeholder="Your precious comment"
              className="  shadow-lg w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
          <div className="flex justify-center items-center  mt-10">
            <Button type="submit" className="mx-auto" name={"Submit "}></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;
