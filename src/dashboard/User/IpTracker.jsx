import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useUserSingle from "../../Hooks/useUserSingle";

const IpTracker = () => {
  const [ipv4Address, setIpv4Address] = useState("");
  const [ipv6Address, setIpv6Address] = useState("");
  const [getInfo, setGetInfo] = useState({});
  const [lat, setlat] = useState(21.4241);
  const [lon, setlon] = useState(39.8173);
  const [Acc, setAcc] = useState(5);

  const { userSingle } = useUserSingle();

  const getUserAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      setIpv4Address(await response.text());
      const response2 = await fetch("https://api64.ipify.org");
      setIpv6Address(await response2.text());
      const response3 = await fetch(`https://ip-api.com/json/${ipv4Address}`);

      setGetInfo(await response3.json());
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: ` Failed to fetch${err}`,
        showConfirmButton: false,
        background: "#144248",
        color: "#EEEEEE",
        timer: 2000,
      });
    }
    const LocationInfo = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const data = await response.json();

        setGetInfo(data);
      } catch (error) {
        console.error("Error fetching location info:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: ` Failed to fetch${error}`,
          showConfirmButton: false,
          background: "#144248",
          color: "#EEEEEE",
          timer: 2000,
        });
        return null;
      }
    };
    LocationInfo();
  };

  const click = "Click Location info button to see the details";

  const city = getInfo?.osm_id || click;
  const region = getInfo?.display_name || click;

  const isp = getInfo?.osm_type || click;
  const zip = getInfo?.addresstype || click;

  const ipv4 = ipv4Address || click;
  const ipv6 = ipv6Address || click;
  const AreaType = getInfo?.type || click;

  useEffect(() => {
    if (isNaN(lat) || isNaN(lon)) {
      console.error("Invalid lat or lon values:", lat, lon);
      return;
    }
    const existingMap = L.DomUtil.get("map");
    if (existingMap) {
      existingMap._leaflet_id = null;
    }

    const map = L.map("map").setView([lat, lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "FunctionFusion",
    }).addTo(map);

    L.featureGroup([
      L.marker([lat, lon]),
      L.circle([lat, lon], { radius: Acc }),
    ]).addTo(map);
    if (!navigator.geolocation) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your browser doesnt support geolocation feature",
        showConfirmButton: false,
        background: "#144248",
        color: "#EEEEEE",
        timer: 2000,
      });
    } else {
      navigator.geolocation.getCurrentPosition((params) => {
        setInterval(() => {
          setlat(params.coords.latitude);
          setlon(params.coords.longitude);
          setAcc(params.coords.accuracy);
        }, 5000);
      });
    }
  }, [lat, lon, Acc]);

  return (
    <div className="text-[#144248] max-w-7xl mx-auto pt-4 p-6 dark:text-slate-100">
      <h1 className=" text-3xl md:text-4xl text-center font-bold drop-shadow ">
        Discover Your World: <br className="md:hidden" />
        <span className=" text-[#019D90] ">IP Address & Location</span>
        <br className="md:hidden" /> Tracking system
      </h1>
      <p className=" md:text-lg py-3  text-center dark:text-slate-400">
        Explore the magic of geolocation with our IP Address & Location Tracker.
        Uncover the details behind every connection – from city vibes to global
        coordinates. Understand where you are and discover the fascinating world
        around you. Your digital journey starts here!
      </p>
      <article className="flex flex-col justify-center items-center gap-4 pt-4">
        <section className=" max-w-6xl mx-auto ">
          <div id="map" className="h-[500px] w-[70vw]  rounded drop-shadow" />
        </section>

        <section className="w-full mt-6 dark:text-slate-400 ">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <tbody>
                <tr>
                  <th className="md:text-xl w-[40%] font-semibold border-2   ">
                    Ip Address (ipv4)
                  </th>
                  <td className="border-2 md:text-xl"> {ipv4}</td>
                </tr>
                <tr>
                  <th className="md:text-xl font-semibold border-2   w-[40%]  ">
                    Ip Address (ipv6 or ipv4 if ipv6 not available)
                  </th>
                  <td className="border-2 md:text-xl">{ipv6}</td>
                </tr>

                <tr>
                  <th className=" md:text-lg font-semibold border-2   w-[40%] ">
                    Regoin
                  </th>
                  <td className="border-2 md:text-lg">{region}</td>
                </tr>

                <tr>
                  <th className=" md:text-lg font-semibold border-2  ">
                    Address Type
                  </th>
                  <td className="border-2 md:text-lg">{zip}</td>
                </tr>

                <tr>
                  <th className=" md:text-lg font-semibold border-2  w-[40%]  ">
                    Osm Id
                  </th>
                  <td className="border-2 md:text-lg"> {city}</td>
                </tr>
                <tr>
                  <th className=" md:text-lg font-semibold border-2  ">
                    Osm Type
                  </th>
                  <td className="border-2 md:text-lg">{isp}</td>
                </tr>
                <tr>
                  <th className=" md:text-lg font-semibold border-2  ">
                    Area Type
                  </th>
                  <td className="border-2 md:text-lg">{AreaType}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="flex justify-center items-center">
          {userSingle?.role === "premium" ? (
            <motion.button
              onClick={getUserAddress}
              whileTap={{ scale: 0.9 }}
              className="hover:bg-[#017E77] my-6 font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded flex justify-center items-center gap-2 dark:bg-[#28374e]"
            >
              Show location info
            </motion.button>
          ) : (
            <motion.button onClick={getUserAddress} whileTap={{ scale: 0.9 }}>
              <Link
                to="/payment"
                className="hover:bg-[#017E77] my-6 font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded flex justify-center items-center gap-2 dark:bg-[#28374e]"
              >
                Show location info
              </Link>
            </motion.button>
          )}
        </div>
      </article>
    </div>
  );
};

export default IpTracker;
