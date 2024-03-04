import TeamMember from "./TeamMember";

const MeetTeam = () => {
  return (
    <div className="px-4 my-10 py-6 rounded-lg mx-auto cloudBannerZ max-w-7xl md:px-24 lg:px-8 lg:">
      <div className="mx-auto mb-10  text-center">
        <p className=" px-3 py-px mb-4 text-4xl drop-shadow  font-bold rounded-full ">
          Meet the Minds Behind{" "}
          <span className="text-[#019D90]">
            <span className="text-[#019D90]"> Swifty Mail</span>{" "}
          </span>
        </p>
        <p className="text-base ">
          Step into the heart of{" "}
          <span className="text-[#019D90] font-semibold"> Swifty Mail</span> and
          meet the brilliant minds that drive our innovation. Our diverse team
          brings a wealth of expertise and creativity to the table. Get to know
          the individuals shaping your digital experience, fueling our passion
          for excellence, and ensuring{" "}
          <span className="text-[#019D90] font-semibold"> Swifty Mail</span>{" "}
          remains at the forefront of user-centric design. Join us on a journey
          of collaboration, dedication, and a shared commitment to redefine the
          possibilities of online communication.
        </p>
      </div>
      <div className=" ">
        <TeamMember></TeamMember>
      </div>
    </div>
  );
};

export default MeetTeam;
