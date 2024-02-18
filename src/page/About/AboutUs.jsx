import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./AboutUs.css";
import our from "../../assets/BannerL&Logo/ourStory.gif";
import mission from "../../assets/BannerL&Logo/mission.gif";
import privacy from "../../assets/BannerL&Logo/privacy.gif";
import inno from "../../assets/BannerL&Logo/innovative.jpg";
import user from "../../assets/BannerL&Logo/user.jpg";
import sus from "../../assets/BannerL&Logo/sus.gif";
import hand from "../../assets/BannerL&Logo/hand.jpeg";
import join from "../../assets/BannerL&Logo/join.gif";

import TabPanelZ from "./TabPanelZ";
import ContactUs from "./ContactUs";
import MeetTeam from "./MeetTeam";
const AboutUs = () => {
  return (
    <>
      <section className="max-w-7xl text-[#144248] mx-auto mt-10 ">
        <h1 className="text-4xl   font-bold drop-shadow-md  text-center lg:text-left">
          About <span className="text-[#019D90]"> Us</span>{" "}
        </h1>
        <Tabs className={"mt-6"}>
          <TabList className={`flex justify-center flex-wrap`}>
            <Tab>Our Story</Tab>
            <Tab>Mission & Values</Tab>
            <Tab>Privacy</Tab>

            <Tab>Innovation Hub</Tab>
            <Tab>User-Centric Approach</Tab>
            <Tab>Sustainability Initiatives</Tab>
            <Tab>Transparency Matters</Tab>
            <Tab>Join Our Mission</Tab>
          </TabList>

          <TabPanel className={"mt-4 "}>
            <TabPanelZ
              img={our}
              Description={
                "Embark on a captivating journey through our story, where every milestone is a testament to our relentless pursuit of excellence. From the inception of Swifty Mail to the present day, our narrative is woven with passion, challenges, and triumphs. Each chapter reflects our commitment to innovation, user-centric solutions, and the unwavering belief that technology should enhance lives."
              }
              small={
                "Join us in celebrating the moments that shaped Swifty Mail into what it is today. From overcoming challenges to the joyous victories, our story is a reflection of our resilience and dedication. As we grow, so does our story, and we invite you to be part of the next chapter. Explore our journey, and let's create the next chapter together."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={mission}
              Description={
                "Get to know the faces behind Swifty Mail – a diverse ensemble of talents, each contributing a unique skill set and perspective. Our team is more than professionals; we are a family united by a shared passion for innovation. Meet the minds that fuel our creativity, drive our success, and work collaboratively to bring you a service that transcends expectations."
              }
              small={
                "At Swifty Mail, our mission is more than a statement; it's a rallying call for everyone who believes in a secure digital future. Explore how our values influence our decision-making, drive our initiatives, and create an environment where users are not just participants but valued partners in our journey. Join us in shaping the future of digital communication."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={privacy}
              Description={
                "Immerse yourself in our commitment to you, the user. Our user-centric approach is not just a philosophy; it's the cornerstone of everything we do. Every feature, design choice, and solution is crafted with your needs at the forefront. Your experience with Swifty Mail is not just a service interaction; it's a personalized journey designed to enhance your digital lifestyle"
              }
              small={
                "At Swifty Mail, we believe in making every interaction effortless and enjoyable. The 'Revolutionizing Online Communication' tab isn't just a showcase of features; it's an invitation to experience the future of digital communication. Dive into this tab to witness how Swifty Mail is setting new standards and creating a benchmark in user-centric design. Experience a new era in digital communication with Swifty Mail."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={inno}
              Description={
                "Step into our innovation hub, a dynamic space where ideas flourish and technology takes on new dimensions. This is the birthplace of features that redefine the user experience. From brainstorming sessions that spark creativity to the meticulous crafting of prototypes, our innovation hub is the epicenter of technological advancement, where we strive to stay ahead of the curve."
              }
              small={
                "Innovation is at the core of Swifty Mail, and our innovation hub is where ideas come to life. Beyond the final products, this section offers a glimpse into the creative process. Explore the experiments, breakthroughs, and lessons learned as we push the boundaries of what's possible in the digital realm. Step into the world of innovation with Swifty Mail."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={user}
              Description={
                "Uncover the technological marvels that power Swifty Mail. Our tech stack is a synergy of cutting-edge tools and frameworks meticulously chosen to deliver a secure, efficient, and seamless platform. From robust security protocols that safeguard your data to intuitive user interfaces that enhance your experience, our tech stack is the backbone of innovation."
              }
              small={
                "In this section, discover how our user-centric approach translates into tangible benefits for you. From intuitive interfaces to features driven by user feedback, Swifty Mail is your digital companion, shaped by your preferences and needs. Join us in putting the user experience first. Explore the tech behind Swifty Mail."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={sus}
              Description={
                "Join our thriving community, a vibrant ecosystem where users become collaborators. Explore our initiatives to foster connection, gather feedback, and evolve together. From community forums that encourage discussions to events that celebrate milestones, we are committed to creating a space where Swifty Mail is not just a service but a shared experience."
              }
              small={
                "Behind the scenes, our tech stack is a carefully curated ensemble of technologies that work in harmony. This section provides a deeper dive into the components that make Swifty Mail tick. Explore the intricacies of our tech choices and how they contribute to the reliability and performance you experience. Discover the technology that powers our vibrant community."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={hand}
              Description={
                "Discover our commitment to a sustainable future. Our sustainability initiatives extend beyond the digital realm, aiming to minimize our environmental impact. Explore how we integrate eco-friendly practices, raise community awareness, and contribute to a greener planet. At Swifty Mail, we believe that responsible technology can coexist with environmental stewardship."
              }
              small={
                "Sustainability is a journey, and in this section, you'll learn about our ongoing initiatives. Explore how we are reducing our carbon footprint, promoting eco-conscious practices, and inspiring our users to be part of a sustainable digital ecosystem. Join us in creating a lasting impact for generations to come. Dive into our sustainability journey."
              }
            ></TabPanelZ>
          </TabPanel>

          <TabPanel className={" "}>
            <TabPanelZ
              img={join}
              Description={
                "At Swifty Mail, transparency is not just a policy; it's a promise. Delve into our commitment to openness and honesty across all practices. From clearly defined data handling procedures to the transparent development of features, we strive to build trust. Our dedication to transparency ensures that you have a clear understanding of how we operate, putting you in control of your digital journey"
              }
              small={
                "In this section, explore how transparency is woven into the fabric of Swifty Mail. Beyond words, we demonstrate our commitment through concrete actions, and this tab provides a closer look at the mechanisms that ensure your trust is well-placed. Navigate with confidence, knowing that transparency is at the core of our operations. Explore transparency at Swifty Mail."
              }
            ></TabPanelZ>
          </TabPanel>
        </Tabs>
      </section>
      <MeetTeam></MeetTeam>
      <ContactUs></ContactUs>
    </>
  );
};

export default AboutUs;
