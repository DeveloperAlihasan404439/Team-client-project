// animate and lottie npm package
import Lottie from "lottie-react";

// import why us all image
import gif from "../assets/BannerL&Logo/control.gif";
import img from "../assets/BannerL&Logo/whyUslottie.json";
import img2 from "../assets/BannerL&Logo/spam.json";
import img3 from "../assets/BannerL&Logo/verific.json";

// aos animation npm package
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUS = () => {
    
  AOS.init({});

  return (
    <div className=" relative  ">
      <section className="w-11/12 max-w-7xl mx-auto shadow-md rounded-xl border-t-2 text-[#144248] bg-[#EEE] dark:bg-[#1E293B] dark:text-slate-400 dark:border dark:border-gray-600 p-6 text-center z-90 ">
        <header>
          <h1 className="text-4xl drop-shadow-md  text-[#144248] dark:text-white  font-bold">
            Why <span className="text-[#019D90] font-bold">Swifty Mail !</span>{" "}
          </h1>
          <p className="text-lg py-4">
            Elevate Your Online Privacy with Our Secure Temporary Email
            Service.Discover the convenience and security of{" "}
            <span className="text-[#019D90] font-bold">Swifty Mail</span>,{" "}
            <br /> your go-to destination for hassle-free temporary email
            services. Safeguard your privacy, avoid spam, and simplify your{" "}
            <br /> online interactions with our easy-to-use platform. Choose us
            for a seamless and secure online experience.
          </p>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6  mt-10">
          <aside
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center lg:gap-4 "
          >
            <img
              className="h-28 rounded-xl"
              src="https://1st-it.com/wp-content/uploads/2017/05/cyber-attack.gif"
              alt=""
            />
            <h1 className="text-xl dark:text-white font-bold drop-shadow-md ">
              Privacy and Security First
            </h1>
            <p className=" text-sm">
              Swifty Mail prioritizes your privacy by providing disposable and
              secure temporary email addresses. Protect your personal
              information and enjoy a worry-free online experience.
            </p>
          </aside>
          <Lottie
            className="max-h-[60vh] lg:col-span-2 lg:row-span-2"
            animationData={img}
            loop={true}
          />
          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
            <Lottie
              data-aos="zoom-in"
              className="h-28 col-span-2 row-span-2"
              animationData={img2}
              loop={true}
            />
            <h1 className="text-xl  font-bold drop-shadow-md dark:text-white">
              Avoid Spam and Unwanted Emails
            </h1>
            <p className=" text-sm">
              Tired of receiving endless spa in your primary inbox? Swifty Mail
              helps you create temporary emails for one-time use, keeping your
              primary inbox clutter-free and ensuring you only receive the
              emails you want.
            </p>
          </aside>

          <aside
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
            <Lottie
              className="h-36 col-span-2 row-span-2"
              animationData={img3}
              loop={true}
            />
            <h1 className="text-xl font-bold drop-shadow-md dark:text-white ">
              Effortless Email Verification
            </h1>
            <p className=" text-sm">
              Swifty Mail simplifies the email verification process. Create
              temporary emails when signing up for services or websites, and
              effortlessly access verification emails without compromising your
              primary email address.
            </p>
          </aside>

          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
            <img className="h-28 rounded-xl" src={gif} alt="" />
            <h1 className="text-xl font-bold drop-shadow-md dark:text-white ">
              Enhanced Control and Convenience
            </h1>
            <p className=" text-sm">
              Gain control over your online presence with Swifty Mail. Easily
              generate, manage, and discard temporary emails as needed. Enjoy
              the convenience of disposable emails without sacrificing security
              and control
            </p>
          </aside>
        </section>
      </section>
    </div>
  );
};

export default WhyUS;
