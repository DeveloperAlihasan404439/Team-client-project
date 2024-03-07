import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Subscription = () => {
  const subscriptionButtonCss = 'hover:bg-[#017E77] font-semibold bg-[#019D91] w-full md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded flex justify-center items-center gap-2 dark:text-slate-100 dark:bg-[#28364e]'
  return (
    <div className="max-w-7xl mx-auto shadow-md border-t-2 text-[#144248] border-t-gray-200 p-3 md:p-0 rounded-2xl dark:bg-[#1E293B]">
      <div className=" px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
          <div className="flex lg:w-[30%] flex-col drop-shadow items-center xl:items-start xl:mx-8">
            <h1 className="text-2xl font-medium capitalize lg:text-3xl dark:text-slate-100">
              Unlock Premium Benefits with Our{" "}
              <span className=" text-[#019D90] font-bold">Subscription</span>{" "}
              Plans
            </h1>
            <div className="mt-4">
              <span className="inline-block w-40 h-1  rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1  rounded-full"></span>
              <span className="inline-block w-1 h-1  rounded-full"></span>
            </div>

            <p className="mt-4 dark:text-slate-400 ">
              Explore our range of subscription plans designed to elevate your
              experience on our platform. Enjoy exclusive features, enhanced
              security, and unparalleled convenience with our premium offerings.
              Choose the plan that best suits your needs and unlock a world of
              possibilities today.
            </p>
          </div>

          <div className="xl:mx-8 lg-w-[70%]">
            <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:bg-[#232f44] dark:border-none">
                <div className="p-6">
                  <h1 className="text-xl font-medium  capitalize lg:text-2xl dark:text-slate-100">
                  <span className=" text-[#019D90]">Regular</span> Usage
                  </h1>

                  <p className="mt-4 dark:text-slate-400">
                    Experience the essentials with our Regular Usage plan. Ideal
                    for users who prioritize simplicity and basic functionality,
                    this plan offers access to core features without any frills.
                    Enjoy reliable service and essential tools to meet your
                    needs efficiently and effectively.
                  </p>

                  <h2 className="mt-4 lg:mt-8 text-2xl font-semibold  sm:text-3xl dark:text-slate-100">
                    $0<span className="text-base font-medium">/Month</span>
                  </h2>

                  <p className="mt-1 text-lg font-semibold ">
                    <span className=" text-[#019D90]">Free</span>
                  </p>
                  <div className="py-4 w-full">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="w-full"
                    >
                      <Link to= "/payment" className={subscriptionButtonCss}>Current Plan</Link>
                      
                    </motion.button>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-slate-200" />

                <div className="p-6">
                  <h1 className="text-lg font-medium  capitalize lg:text-xl dark:text-slate-100">
                    What’s included
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Only disposable email </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Chat support</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Password Checking System</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Cloud Storage service</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Unlimited user emials</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Adversite free surfing</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Priority support</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Unlimited Inbox</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:bg-[#232f44] dark:border-none">
                <div className="p-6">
                  <h1 className="text-xl font-medium  capitalize lg:text-2xl dark:text-slate-100">
                    {" "}
                    <span className=" text-[#019D90]">Premium</span>{" "}
                    Subscription
                  </h1>

                  <p className="mt-4 dark:text-slate-400">
                    Unlock the full potential of our platform with our Premium
                    Subscription. Elevate your experience with exclusive
                    features and priority support. Enjoy advanced functionality,
                    enhanced security, and premium services tailored to meet
                    your unique requirements. Upgrade to our Premium
                    Subscription and take your user experience to the next
                    level.
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold  sm:text-3xl dark:text-slate-200">
                    $10.00 <span className="text-base font-medium">/Month</span>
                  </h2>

                  <div className="py-4 w-full">
                    
                  <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="w-full"
                    >
                      <Link to= "/payment" className={subscriptionButtonCss}>Start now !</Link>
                      
                    </motion.button>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-slate-200" />

                <div className="p-6 md:py-10 lg:p-6">
                  <h1 className="text-lg font-medium  capitalize lg:text-xl dark:text-slate-100">
                    What’s included
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Only disposable email </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Chat support</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Password Checking System</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Cloud Storage service</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Unlimited user emials</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Adversite free surfing</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Priority support</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#019D90]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 dark:text-slate-400 ">Unlimited Inbox</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
