import Lottie from "lottie-react";
import error from "../../assets/BannerL&Logo/errorSign.json";
import { Link } from "react-router-dom";
import { FaTentArrowTurnLeft } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div className="dark:bg-[#0F172A]">
      <div className="flex h-[100dvh] pt-20 flex-col md:flex-row text-center md:text-center p-6 max-w-7xl gap-20 mx-auto justify-center items-center ">
        <section className=" ">
          <Lottie
            className="w-96 drop-shadow"
            animationData={error}
            loop={true}
          />
        </section>
        <section className=" ">
          <h1 className="text-7xl drop-shadow text-[#FF5733] font-bold dark:text-slate-100">
            {" "}
            404 - Page Not Found
          </h1>

          <p className="text-lg py-6 mb-3 dark:text-slate-300">
            We couldn't find the page you're looking for. It might be a typo in
            the URL, an outdated link, or the page may have been moved or
            deleted. Please check the URL for any mistakes or visit our homepage
            to navigate to the right place. If you continue to experience
            issues, feel free to contact our support team. We apologize for any
            inconvenience.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="flex justify-center items-center px-4 py-2 bg-[#FF5733] gap-2 text-black rounded w-fit dark:bg-[#232f44] dark:text-slate-200"
            >
              <FaTentArrowTurnLeft />
              BACK TO HOME
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
