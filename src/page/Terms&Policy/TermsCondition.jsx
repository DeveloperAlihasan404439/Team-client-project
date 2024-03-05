import { Link } from "react-router-dom";

// use design motion and title updated helpet hooks
import { motion } from "framer-motion";
import HelmetTitle from "../../shared/HelmetTitle";

// use react icons npm package 
import { FaTentArrowTurnLeft } from "react-icons/fa6";

const TermsAndConditions = () => {
  return (
    <div className="py-5">
      {/* daynamic title component  */}
      <HelmetTitle title="Terms Conditions" />
      <motion.div
        className="terms-container max-w-7xl  mx-auto p-8 border-t-2 rounded-md shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* got to home link button  */}
        <Link
          to="/"
          className="flex justify-center items-center w-fit px-4 py-2 bg-[#019D91] gap-2 text-[#EEEEEE] rounded"
        >
          <FaTentArrowTurnLeft />
          BACK TO HOME
        </Link>
        {/* got to home link button  */}

        <h1 className="text-3xl drop-shadow  my-4 mt-5 font-bold ">
          <span className="text-[#019D90] font-semibold  drop-shadow ">
            Swifty Mail
          </span>{" "}
          Terms and Conditions
        </h1>
        <p className="py-1 font-medium   drop-shadow ">
          Welcome to{" "}
          <span className="text-[#019D90] font-semibold">Swifty Mail</span>!
        </p>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of FuncitonFusion's Website, located at https://temp-mail.org/en/.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use{" "}
          <span className="text-[#019D90] font-semibold">Swifty Mail</span> if
          you do not agree to take all of the terms and conditions stated on
          this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company's terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client's
          needs in respect of provision of the Company's stated services, in
          accordance with and subject to, prevailing law of af. Any use of the
          above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>
        <h2 className="text-2xl  drop-shadow  font-semibold   my-4">Cookies</h2>
        <p>
          We employ the use of cookies. By accessing{" "}
          <span className="text-[#019D90] font-semibold">Swifty Mail</span>, you
          agreed to use cookies in agreement with the FuncitonFusion's Privacy
          Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user's
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <h2 className="text-2xl  drop-shadow  my-4 mt-5 font-semibold ">
          License
        </h2>
        <p>
          Unless otherwise stated, FuncitonFusion and/or its licensors own the
          intellectual property rights for all material on{" "}
          <span className="text-[#019D90] font-semibold">Swifty Mail</span>. All
          intellectual property rights are reserved.
        </p>
        <ul className="list-disc my-4 mt-5 ml-6">
          <li>
            You must not republish material from{" "}
            <span className="text-[#019D90] font-semibold">Swifty Mail</span>.
          </li>
          <li>
            You must not sell, rent, or sub-license material from{" "}
            <span className="text-[#019D90] font-semibold">Swifty Mail</span>.
          </li>
          <li>
            You must not reproduce, duplicate, or copy material from{" "}
            <span className="text-[#019D90] font-semibold">Swifty Mail</span>.
          </li>
          <li>
            You must not redistribute content from{" "}
            <span className="text-[#019D90] font-semibold">Swifty Mail</span>.
          </li>
        </ul>
        <p>
          This Agreement shall begin on the date hereof. Parts of this website
          offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. FuncitonFusion does not
          filter, edit, publish or review Comments prior to their presence on
          the website. Comments do not reflect the views and opinions of
          FuncitonFusion,its agents and/or affiliates. Comments reflect the
          views and opinions of the person who post their views and opinions. To
          the extent permitted by applicable laws, FuncitonFusion shall not be
          liable for the Comments or for any liability, damages or expenses
          caused and/or suffered as a result of any use of and/or posting of
          and/or appearance of the Comments on this website.
        </p>
        <p>
          FuncitonFusion reserves the right to monitor all Comments and to
          remove any Comments which can be considered inappropriate, offensive
          or causes breach of these Terms and Conditions.
        </p>
        <p>
          You warrant and represent that: You are entitled to post the Comments
          on our website and have all necessary licenses and consents to do so;
          The Comments do not invade any intellectual property right, including
          without limitation copyright, patent or trademark of any third party;
          The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material which is an invasion of
          privacy The Comments will not be used to solicit or promote business
          or custom or present commercial activities or unlawful activity.
        </p>
        <p>
          You hereby grant FuncitonFusion a non-exclusive license to use,
          reproduce, edit and authorize others to use, reproduce and edit any of
          your Comments in any and all forms, formats or media.
        </p>
        <ul className="my-4 mt-5">
          Hyperlinking to our Content The following organizations may link to
          our Website without prior written approval:
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            <p>News organizations;</p>
            <p>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </p>
            <p>
              These organizations may link to our home page, to publications or
              to other Website information so long as the link:{" "}
            </p>{" "}
            is not in any way deceptive;does not falsely imply sponsorship,
            endorsement or approval of the linking party and its products and/or
            services; and (c) fits within the context of the linking party's
            site.
          </li>
        </ul>
        <h1 className="text-2xl  drop-shadow  font-semibold my-4 mt-5">
          Content Liability
        </h1>
        <p>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>
        <h1 className="text-2xl  drop-shadow  font-semibold my-4 mt-5">
          Reservation of Rights
        </h1>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it's linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>
        <h1 className="text-2xl  drop-shadow  font-semibold my-4 mt-5">
          iFrames
        </h1>
        <p>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>
        <h1 className="text-2xl  drop-shadow  font-semibold my-4 mt-5">
          Removal of links from our website
        </h1>
        <p>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>
        We do not ensure that the information on this website is correct, we do
        not warrant its completeness or accuracy; nor do we promise to ensure
        that the website remains available or that the material on the website
        is kept up to date.
        <h1 className="text-2xl  drop-shadow  font-semibold my-4 mt-5">
          Disclaimer
        </h1>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>
            limit or exclude our or your liability for death or personal injury;
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or exclude any of our or your
            liabilities that may not be excluded under applicable law.
          </li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty. As long as the website and the information
          and services on the website are provided free of charge, we will not
          be liable for any loss or damage of any nature.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
