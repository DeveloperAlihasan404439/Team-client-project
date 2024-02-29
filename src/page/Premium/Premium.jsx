import { Link } from "react-router-dom";
import HelmetTitle from "../../shared/HelmetTitle";

const Premium = () => {
  return (
    <div>
    <HelmetTitle title="Premium"/>
      <div className="bg-slate-500 lg:h-60 py-14 custombg">
        <div className="max-w-[1300px] mx-auto flex justify-center lg:justify-between text-white">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">The Tech behind Disposable <span className="text-teal-500">Email Addresses</span></h1>
            <p className="text-2xl font-semibold mt-3 mb-1">Swifty mail Premium now includes Flaticon.</p>
            <p className="text-2xl font-semibold">Access over 40 email address, storage and more.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5 pb-3">
        <button className="p-3 border-2 rounded-md bg-white text-xl font-bold uppercase text-teal-500">individual</button>
      </div>

      <div className="max-w-[1300px] px-2 lg:px-0 mx-auto lg:pb-20">
        <div className="grid lg:grid-cols-5  grid-cols-1 lg:gap-x-4 lg:space-y-0 space-y-3 pb-7">
          <div className="card bg-base-100 shadow-xl col-span-3 row-span-2">
            <div className="p-7 text-lg">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="mb-4 lg:mb-0">
                  <p className="pb-3">Daily downloads More info</p>
                  <p>Daily your email generation More info </p>
                  <p className="py-3">Daily get your email and more things </p>
                  <p>Cloud Storage</p>
                  <p className="py-3">142M Premium vectors, emails, get up to 15gb storage ...</p>
                  <p>No attribution required</p>
                  <p className="py-3">Free Flaticon account More info</p>
                  <p>Ad-free browsing</p>
                  <p className="py-3">Priority support</p>
                </div>
                <div>
                  <p className="pb-3">10/day</p>
                  <p>20/day</p>
                  <p className="py-3">Limited </p>
                  <p>Online editor</p>
                  <p className="py-3">Free content </p>
                  <p>*</p>
                  <p className="py-3">*</p>
                  <p>*</p>
                  <p className="py-3">*</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid-cols-1 grid grid-rows-2 gap-y-4 ">
          <div className="card bg-base-100 shadow-xl  ">
            <div className="p-7 flex flex-col lg:flex-row justify-between">
              <div>
                <p className="font-bold text-xl">1 MONTHS</p>
                <p className="py-3"><span className="font-bold text-lg">10 $</span> /per month</p>
                <p><span className="font-bold">100$</span> every <span className="font-bold">10</span> month</p>
                <p className="py-3">VAT and every local taxes may apply</p>
              </div>
              <div className="lg:absolute lg:bottom-0 lg:right-0 pr-6 pb-9">
                <Link to="/payment">
                  <button className="btn font-semibold text-lg text-white bg-teal-500 hover:text-teal-500">Subscription</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100  shadow-xl ">
            <div className="p-7">
              <p>Get premium by payment</p>
              <p className="py-3">And enjoy your service</p>
              <p>And get unlimited emails</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Premium;