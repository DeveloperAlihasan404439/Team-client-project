import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { MdDelete } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { AuthContext } from "./../../provider/AuthProvider";
import { motion } from "framer-motion";
import CloudBanner from "./CloudBanner";
import { toast } from "react-toastify";

const Storage = () => {
  const { user } = useContext(AuthContext);
  const [filesList, setFilesList] = useState([]);
  const [files, setFiles] = useState(null);
  const storage = getStorage(app);
  const fileListRef = ref(storage, `${user?.email}/`);
  const[error, setError]=useState(null)

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
        setError(error)
      });
  }, [filesList]);

  const uploadImg = () => {
    if (files == null) return;
    const fileRef = ref(storage, `${user?.email}/${files.name}`);
    uploadBytes(fileRef, files)
      .then((snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(snapshot);
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
            transition: Bounce,
            });
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
const handleDelete=(id)=>{

  const desertRef = ref(storage, id);
  deleteObject(desertRef).then(() => {
    
    toast(`File Deleted: ${files.name}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }).catch((error) => {
    console.log(error);
  });
}
 



  return (
    <div className="">
      <CloudBanner></CloudBanner>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="flex max-w-7xl mx-auto  gap-8 border-t-2 flex-col lg:mt-32"
      >
        <section className=" flex justify-between items-center cloudBannerZ w-full p-6 rounded-lg mt-10 ">
          <h1 className="text-lg">
         <p>    Files will be uploaded on User : <span className="text-[#017E77] semibold"> {user?.email} </span> </p>
           
            
          </h1>
          <div>
            <label className=" flex items-center gap-2">
              <input
                type="text"
                className=" h-5 hidden md:inline w-full p-6 focus:border-[#017E77] outline-[#017E77] bg-white rounded-lg"
                placeholder="Search"
              />
            </label>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-4 md:gap-16 cloudBannerZ p-4 rounded-lg border-t-2 ">
          <input
            className="md:w-[40%] "
            type="file"
            onChange={(e) => {
              setFiles(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded mx-auto flex justify-center items-center gap-2 "
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
        className="flex justify-start items-center mt-6 gap-8 max-w-7xl mx-auto cloudBannerZ p-6 rounded-lg  flex-wrap"
      >
        <h1 className="text-lg text-center">
        
          Cilck here to Download the uploaded files
        </h1>
       
        <div className="max-w-5xl mx-auto overflow-auto">
  <ol className="md:list-decimal flex flex-col gap-2">
    {filesList.length > 0 ? (
      filesList?.map((url, index) => (
        <li key={index} className="">
          <span className="md:hidden">{index + 1}.</span>
          <p className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <a className="underline text-gray-600" href={url} download>
              {url}
            </a>
            <button onClick={() => handleDelete()} className="text-[#e74c3c] hover:rotate-[20deg] hover:duration-300 text-3xl">
              <MdDelete />
            </button>
          </p>
        </li>
      ))
    ) : (
      error ? (
        <div>{error}</div>
      ) : (
        <div className="text-3xl font-bold flex justify-center items-center"> No files have been uploaded </div>
      )
    )}
  </ol>
</div>


  
      </motion.div>
    </div>
  );
};

export default Storage;
