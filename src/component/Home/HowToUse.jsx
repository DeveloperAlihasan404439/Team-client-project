import img from "../../assets/BannerL&Logo/howTOuse.json";
import img1 from "../../assets/BannerL&Logo/generate.json";
import img2 from "../../assets/BannerL&Logo/generateEmail.json";
import img3 from "../../assets/BannerL&Logo/NoEmail.json";
import img4 from "../../assets/BannerL&Logo/relax.json";
import Lottie from "lottie-react";

import AOS from "aos";
import "aos/dist/aos.css";

const HowToUse = () => {
  AOS.init({});

  return (
      <div
        data-aos="zoom-in"
        className="w-11/12 max-w-7xl mx-auto my-6  shadow-md border-t-2 text-[#144248] border-t-gray-200 p-3 md:p-0 rounded-2xl"
      >
        <div className="flex flex-col lg:flex-row lg:justify-start  lg:items-start  gap-10">
          <aside className=" lg:w-[50%] rounded-lg pt-0">
            <h1 className="text-4xl font-bold  drop-shadow-md lg:hidden mb-6 md:mb-0 text-[#144248] ">
             
              How to Use <span className=" text-[#019D90]">
               
                Swifty Mail
              </span>
              - Your Quick Guide to Instant Privacy
            </h1>
            <Lottie
              className=" lg:col-span-2 lg:row-span-2 h-[50vh] lg:h-[100%]  w-full rounded-lg"
              animationData={img1}
              loop={true}
            />
          </aside>

          <aside className="lg:w-[50%] lg:pt-10 ">
            <h1 className="text-3xl font-bold drop-shadow-md hidden lg:block ">
             
              How to Use <span className=" text-[#019D90]">
               
                Swifty Mail
              </span>
              - Your Quick Guide to Instant Privacy
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:pb-10">
              <div className="flex flex-col items-start gap-2 justify-start mt-2 md:mt-8">
                <Lottie
                  className=" lg:col-span-2  lg:row-span-2 h-[20vh]  rounded-lg"
                  animationData={img2}
                  loop={true}
                />
                <h1 className="text-lg drop-shadow font-semibold">
                  Generate Your
                  <span className=" text-[#019D90]"> Swifty Mail </span>
                </h1>
                <p className="text-sm ">
                  Start by creating a temporary email address effortlessly with
                  <span className=" text-[#019D90] font-semibold">
                   
                    Swifty Mail
                  </span>
                  . Click the
                  <span className="font-medium">`Generate Email`</span> button,
                  and voila! You have a secure, disposable email at your
                  fingertips.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 justify-start mt-2 md:mt-8">
                <Lottie
                  className=" lg:col-span-2  lg:row-span-2 h-[20vh] rounded-lg"
                  animationData={img}
                  loop={true}
                />
                <h1 className="text-lg drop-shadow font-semibold">
                  Use it Anywhere
                </h1>
                <p className="text-sm ">
                  Whether you`re signing up for a new service, trying out a
                  product, or exploring online platforms,
                  <span className=" text-[#019D90] font-semibold">
                   
                    Swifty Mail
                  </span>
                  is your go-to. Insert your generated email, receive
                  verification emails, and proceed hassle-free.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 justify-start mt-2 md:mt-8">
                <Lottie
                  className=" lg:col-span-2  lg:row-span-2 h-[20vh] rounded-lg"
                  animationData={img3}
                  loop={true}
                />
                <h1 className="text-lg drop-shadow font-semibold">
                  Stay Spam-Free
                </h1>
                <p className="text-sm ">
                  Tired of spam flooding your primary inbox?
                  <span className=" text-[#019D90] font-semibold">
                   
                    Swifty Mail
                  </span>
                  shields your main email address from unnecessary clutter. Keep
                  your inbox tidy, and let
                  <span className=" text-[#019D90]"> Swifty Mail </span> handle
                  the temporary emails. Start by creating a temporary email
                  address effortlessly with
                  <span className=" text-[#019D90]"> Swifty Mail </span>.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 justify-start mt-2 md:mt-8">
                <Lottie
                  className=" lg:col-span-2  lg:row-span-2 h-[20vh] rounded-lg"
                  animationData={img4}
                  loop={true}
                />
                <h1 className="text-lg drop-shadow font-semibold">
                  No Sign-ups, No Hassle
                </h1>
                <p className="text-sm ">
                  Swifty Mail is designed for ease. No lengthy sign-up
                  processes, no commitments. Just the right tool for your
                  on-the-go privacy needs. Experience the simplicity, security,
                  and convenience of
                  <span className=" text-[#019D90]"> Swifty Mail </span> – your
                  gateway to hassle-free online interactions.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </div>
  );
};

export default HowToUse;
