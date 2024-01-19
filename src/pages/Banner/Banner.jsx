import "./Banner.css";
import Typed from "typed.js";
import animationData from "../../../public/animation/1tBLdcUIrC.json";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { FaCopy } from "react-icons/fa";

const Banner = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);
  const el = React.useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    return () => {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
    };
  }, []);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WELCOME FRIENDS", "GET YOUR EMAIL"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="home lg:flex-row flex-col-reverse">
        <div className="home-container">
          <h3 className="">Hello, Friends</h3>

          <h3>
            <span ref={el}></span>
          </h3>
          <p>
            Meet other Ama users like you. Get answers <br /> & discover new
            ways to use Ama !
          </p>
          <div className="mt-5">
          <div className='flex lg:w-[500]'>
                    <input id="Search-fild" type="text"  placeholder="your email" className="input rounded-none rounded-l-3xl text-black w-full max-w-xs" />
                    <button  id="btn-style" className="btn btn-outline"><div className='flex gap-2'> <FaCopy/> Copy</div></button>
            </div>
          </div>
        </div>

        <div className="lg:w-[600px]">
          <div ref={animationContainer} />
        </div>
      </section>
    </div>
  );
};

export default Banner;
