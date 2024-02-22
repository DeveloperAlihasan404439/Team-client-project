import { deleteObject } from "firebase/storage";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import Lottie from 'lottie-react';
import loadingIcon from '../../../assets/BannerL&Logo/LOADING.json'




// import S3 from 'aws-sdk/clients/s3';
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloudBanner from "./CloudBanner";
import { toast } from "react-toastify";
import useAuth from "../../../shared/Auth/useAuth";
import app from "../../../shared/Auth/Firebase";
// import { AWS } from 'aws-sdk/global';

const Storage = () => {
  const { user } = useAuth();
  const [filesList, setFilesList] = useState([]);
  const [files, setFiles] = useState(null);
  const [loading , setloading] = useState(false);
  const storage = getStorage(app);
  const fileListRef = ref(storage, `${user?.email}/`);
  const [error, setError] = useState(null);
  const [fetch,setFecth] =useState(false)
  const [file, setFile] = useState(null);
  const handleAwsFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  useEffect(() => {
    if (!fileListRef) return;
   
    listAll(fileListRef)
   
      .then((res) => {
       
        const promises = res.items.map((item) => getDownloadURL(item));
        Promise.all(promises)
          .then((urls) => {
            setFilesList(urls);
        
          })
          .catch((error) => {
            console.error("Error fetching existing files:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing files:", error);
        setError(error);
      });
      setloading(false)
  }, [filesList],fetch);

  const uploadImg = () => {
    if (files == null) return;
    const fileRef = ref(storage, `${user?.email}/${files.name}`);
    uploadBytes(fileRef, files)
      .then((snapshot) => {
        setloading(true)
        getDownloadURL(snapshot.ref).then((url) => {
          setFilesList((prev) => [...prev, url]);

          toast(`File Uploaded: ${files.name}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        
            transition: 'Bounce',
          });
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
      setloading(false)
  };
  const handleDelete = (id) => {
    const fileRef = ref(storage, id);
    deleteObject(fileRef)
      .then(() => {
        setloading(true)
        setFecth(true)
        toast(`File Deleted`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
         
          transition: 'Bounce',
        });
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
       
      });
      setloading(false)
  };
  const uploadAwsFile = async () => {
//     const S3_BUCKET = "swiftymail";
//     const REGION = "Asia Pacific (Mumbai) ap-south-1";

//     AWS.config.update({
//      region: REGION,
//        accessKeyId: "AKIAZQ3DTHBI2ZDBBY3R",
//         secretAccessKey: "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",
//     });
//     const s3 = new AWS.S3({
//       params: { Bucket: S3_BUCKET },
//       region: REGION,
//     });

//     const params = {
//       Bucket: S3_BUCKET,
//       Key: file.name,
//       Body: file,
//     };

//  const upload = s3
//       .putObject(params)
//       .on("httpUploadProgress", (evt) => {
  // setloading(true)
//         console.log(
//           "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
//         );
//       })
//       .promise();

//     await upload.then((err, data) => {
//       console.log(err);
// setloading(true)
//       alert("File uploaded successfully.");
//     });
//     s3.listObjectsV2(params,(err,data)=>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log(data);
//       }
//     })
  };


  return (
    <>
    <div className="py-5 lg:py-10 overflow-hidden">
      <CloudBanner></CloudBanner>
{
  loading ?   <Lottie className=' h-[200px] md:h-[300px] ' animationData={loadingIcon} loop={true} /> : <section>
  <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{
       ease: "linear",
       duration: 2,
     }}
     className="flex max-w-7xl mx-auto  gap-8 border-t-2 flex-col mt-10"
   >
     <section className=" flex justify-between items-center cloudBannerZ w-full lg:w-[90%] mx-auto p-6 rounded-lg mt-10 ">
       <h1 className="text-lg">
         <p>
         
           Files will be uploaded on User :
           <span className="text-[#017E77] semibold">
           
             {user?.email}
           </span>
         </p>
       </h1>
       <div>
         <h1 className="text-xl ">This is Firebase cloud storage </h1>
       </div>
     </section>
     <section className=" w-11/12 mx-auto flex flex-col justify-between lg:flex-row gap-4 lg:gap-16 cloudBannerZ p-4 rounded-lg border-t-2 ">
       <input
         className="lg:w-[30%] "
         type="file"
         onChange={(e) => {
           setFiles(e.target.files[0]);
         }}
       />
       <motion.button
         whileTap={{ scale: 0.9 }}
         className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit lg:px-4 text-[#EEEEEE] p-2 lg:py-3 rounded mx-auto flex justify-center items-center gap-2 "
         onClick={uploadImg}
       >
         Upload Files
       </motion.button>
     </section>
   </motion.div>
   <motion.div
     transition={{
       ease: "linear",
       duration: 2,
       x: { duration: 1 },
     }}
     className="w-11/12 flex justify-start items-center mt-6 gap-8 max-w-7xl mx-auto cloudBannerZ p-6 rounded-lg  flex-wrap"
   >
     <h1 className="text-lg text-center">
       Cilck here to Download the uploaded files
     </h1>

     <div className="max-w-5xl mx-auto overflow-auto">
       <ol className="lg:list-decimal flex flex-col gap-2">
         {filesList.length > 0 ? (
           filesList?.map((url, index) => (
             <li key={index} className="">
               <span className="lg:hidden">{index + 1}.</span>
               <p className="flex flex-col lg:flex-row justify-center items-center gap-2">
                 <a className="underline text-gray-600" href={url} download>
                   {url}
                 </a>
                 <button
                   onClick={() => handleDelete(url)}
                   className="text-[#e74c3c] hover:rotate-[20deg] hover:duration-300 text-3xl"
                 >
                   <MdDelete />
                 </button>
               </p>
             </li>
           ))
         ) : error ? (
           <div>{error}</div>
         ) : (
           <div className="text-2xl font-bold flex justify-center items-center">
           
             No files have been uploaded
           </div>
         )}
       </ol>
     </div>
   </motion.div>
   <section className=" flex justify-between items-center cloudBannerZ w-full lg:w-[90%] mx-auto p-6 rounded-lg mt-10 ">
       <h1 className="text-lg">
         <p>
         
           Files will be uploaded on User :
           <span className="text-[#017E77] semibold">
           
             {user?.email}
           </span>
         </p>
       </h1>
       <div>
         <h1 className="text-xl ">This is Firebase cloud storage </h1>
       </div>
     </section>
     <section className=" w-11/12 mt-10 mx-auto flex flex-col justify-between lg:flex-row gap-4 lg:gap-16 cloudBannerZ p-4 rounded-lg border-t-2 ">
       <input
         className="lg:w-[30%] "
         type="file" onChange={handleAwsFile}
       />
       <motion.button
         whileTap={{ scale: 0.9 }}
         onClick={uploadAwsFile}
         className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit lg:px-4 text-[#EEEEEE] p-2 lg:py-3 rounded mx-auto flex justify-center items-center gap-2 "
       
       >
         Upload Files
       </motion.button>
     </section>
  
   <motion.div
     transition={{
       ease: "linear",
       duration: 2,
       x: { duration: 1 },
     }}
     className="w-11/12 flex justify-start items-center mt-6 gap-8 max-w-7xl mx-auto cloudBannerZ p-6 rounded-lg  flex-wrap"
   >
     <h1 className="text-lg text-center">
       Cilck here to Download the uploaded files
     </h1>

     <div className="max-w-5xl mx-auto overflow-auto">
       <ol className="lg:list-decimal flex flex-col gap-2">
         {filesList.length > 0 ? (
           filesList?.map((url, index) => (
             <li key={index} className="">
               <span className="lg:hidden">{index + 1}.</span>
               <p className="flex flex-col lg:flex-row justify-center items-center gap-2">
                 <a className="underline text-gray-600" href={url} download>
                   {url}
                 </a>
                 <button
                   onClick={() => handleDelete(url)}
                   className="text-[#e74c3c] hover:rotate-[20deg] hover:duration-300 text-3xl"
                 >
                   <MdDelete />
                 </button>
               </p>
             </li>
           ))
         ) : error ? (
           <div>{error}</div>
         ) : (
           <div className="text-2xl font-bold flex justify-center items-center">
           
             No files have been uploaded
           </div>
         )}
       </ol>
     </div>
   </motion.div>
  </section>
}
    
    </div>
    </>
  );
};

export default Storage;
