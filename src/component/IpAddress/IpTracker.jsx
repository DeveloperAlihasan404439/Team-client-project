


    import { useState } from "react";
    import { useEffect } from "react";
    
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { motion } from "framer-motion";
    
    
    const IpTracker = () => {
      const [ipv4Address, setIpv4Address] = useState("");
      const [ipv6Address, setIpv6Address] = useState("");
      const [getInfo, setGetInfo] = useState({});
    console.log(getInfo);
      
      const getUserAddress = async () => {
    
        try {
          const response = await fetch("https://api.ipify.org");
          setIpv4Address(await response.text());
          const response2 = await fetch("https://api64.ipify.org");
          setIpv6Address(await response2.text());
          const response3 = await fetch(`http://ip-api.com/json/${ipv4Address}`);
    
          setGetInfo(await response3.json());
        } catch (err) {
          console.log(`Failed to fetch${err}`);
        }
     
      };
      const countryCode =
        getInfo?.countryCode || "Click Location info button to see the details";
      const country =
        getInfo?.country || "Click Location info button to see the details";
      const city = getInfo?.city || "Click Location info button to see the details";
      const region =
        getInfo?.regionName || "Click Location info button to see the details";
      const time =
        getInfo?.timezone || "Click Location info button to see the details";
      const isp = getInfo?.isp || "Click Location info button to see the details";
      const zip = getInfo?.zip || "Click Location info button to see the details";
      const lat = getInfo?.lat || "Click Location info button to see the details";
      const lon = getInfo?.lon || "Click Location info button to see the details";
      const ipv4= ipv4Address || "Click Location info button to see the details";
      const ipv6= ipv6Address|| "Click Location info button to see the details";
      const as= getInfo?.as || "Click Location info button to see the details";
    
      const latitue  =getInfo?.lat || 51.505;
        const longitude =getInfo.lon || -0.09 
      useEffect(() => {
        
     
         if (isNaN(latitue) || isNaN(longitude)) {
            console.error('Invalid latitude or longitude values:', latitue, longitude);
            return;
          }
        const existingMap = L.DomUtil.get('map');
        if (existingMap) {
          existingMap._leaflet_id = null;
        }
      
        const map = L.map('map').setView([latitue, longitude], 13 );
    
      
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'FunctionFusion',
        }).addTo(map);
    
     
        L.marker([getInfo?.lat || 51.505, longitude]).addTo(map);
      }, [latitue,longitude]);
    
    
    
      return (
        <div className="text-[#144248] max-w-7xl mx-auto pt-10 p-6">
    
          <h1 className=" text-3xl md:text-4xl text-center font-bold drop-shadow ">
            Discover Your World: <br className="md:hidden" />
            <span className=" text-[#019D90] ">IP Address & Location</span>
            <br className="md:hidden" /> Tracking system
          </h1>
          <p className=" md:text-lg py-3  text-center">
            Explore the magic of geolocation with our IP Address & Location Tracker.
            Uncover the details behind every connection – from city vibes to global
            coordinates. Understand where you are and discover the fascinating world
            around you. Your digital journey starts here!
          </p>
          <article className="flex flex-col justify-center items-center gap-4 pt-4">
            <section className="  ">
    
            <div id="map" className="h-[500px] w-[100vw] max-w-7xl mx-auto rounded drop-shadow" />
    
             </section>
           
            <section className="w-full mt-6 ">
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
                        <th className=" md:text-lg font-semibold border-2   w-[40%]  ">
                          Country Code
                        </th>
                        <td className="border-2 md:text-lg"> {countryCode}</td>
                      </tr>
    
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  w-[40%]  ">Country </th>
                        <td className="border-2 md:text-lg">{country}</td>
                      </tr>
    
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  w-[40%]  ">City </th>
                        <td className="border-2 md:text-lg"> {city}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2   w-[40%] ">Regoin </th>
                        <td className="border-2 md:text-lg">{region}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  w-[40%]  ">Latitude </th>
                        <td className="border-2 md:text-lg"> {lat}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  w-[40%]  ">
                          Longitude
                        </th>
                        <td className="border-2 md:text-lg"> {lon}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  w-[40%] ">
                          Time Zone
                        </th>
                        <td className="border-2 md:text-lg">{time}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  ">Zip Code </th>
                        <td className="border-2 md:text-lg">{zip}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  ">
                          Isp provider
                        </th>
                        <td className="border-2 md:text-lg">{isp}</td>
                      </tr>
                      <tr>
                        <th className=" md:text-lg font-semibold border-2  ">
                         AS 
                        </th>
                        <td className="border-2 md:text-lg">{as}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             
            </section>
            <div className="flex justify-center items-center">
            <motion.button
            onClick={getUserAddress}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-[#017E77] my-6 font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 "
          >
            Show location info
          </motion.button>
            </div>
          </article>
    
         
        </div>
      );
    };
    

    

export default IpTracker;