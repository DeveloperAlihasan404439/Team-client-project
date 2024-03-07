/* eslint-disable no-unused-vars */
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloudBanner from "./CloudBanner";
import { toast } from "react-toastify";
import useAuth from "../../../shared/Auth/useAuth";
import app from "../../../shared/Auth/Firebase";
import { Link } from "react-router-dom";
import useUserSingle from "../../../Hooks/useUserSingle";

const Storage = () => {
  const { user } = useAuth();
  const [filesList, setFilesList] = useState([]);
  const [files, setFiles] = useState(null);
  const storage = getStorage(app);
  const fileListRef = ref(storage, `${user?.email}/`);
  const [error, setError] = useState(null);
  const {userSingle} = useUserSingle();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // eslint-disable-next-line no-undef
            transition: Bounce,
          });
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
  const handleDelete = (id) => {
    const desertRef = ref(storage, id);
    // eslint-disable-next-line no-undef
    deleteObject(desertRef)
      .then(() => {
        toast(`File Deleted: ${files.name}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          // eslint-disable-next-line no-undef
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-5 md:py-10">
      <CloudBanner></CloudBanner>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="flex max-w-6xl mx-auto  gap-8 border-t-2 flex-col lg:mt-5 dark:border-slate-400"
      >
        <section className=" flex justify-between items-center navber-color w-full md:w-[90%] mx-auto p-6 rounded-lg mt-10 ">
          <h1 className="text-lg dark:text-slate-400">
            <p>
              {" "}
              Files will be uploaded on User :{" "}
              <span className="text-[#017E77] semibold dark:text-slate-200">
                {" "}
                {user?.email}{" "}
              </span>{" "}
            </p>
          </h1>
          <div>
            <label className=" flex items-center gap-2">
              <input
                type="text"
                className=" input-text dark:bg-[#1a2331]"
                placeholder="Search"
              />
            </label>
          </div>
        </section>
        <section className=" w-11/12 mx-w-6xl mx-auto flex flex-col justify-between md:flex-row gap-4 md:gap-16 navber-color p-4 rounded-lg border-t-2 ">
          <input
            className="md:w-[30%] "
            type="file"
            onChange={(e) => {
              setFiles(e.target.files[0]);
            }}
          />
          {userSingle?.role === "premium" ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded mx-auto flex justify-center items-center gap-2 dark:bg-[#1a2331]"
              onClick={uploadImg}
            >
              Upload Files
            </motion.button>
          ) : (
            <motion.button whileTap={{ scale: 0.9 }}>
              <Link
                to="/payment"
                className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded mx-auto flex justify-center items-center gap-2 dark:bg-[#1a2331]"
              >
                Upload Files
              </Link>
            </motion.button>
          )}
        </section>
      </motion.div>
      <motion.div
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
        className="w-11/12 mx-w-6xl flex justify-start items-center mt-6 gap-8 max-w-7xl mx-auto navber-color p-6 rounded-lg  flex-wrap"
      >
        <h1 className="text-lg text-center dark:text-slate-400">
          Cilck here to Download the uploaded files
        </h1>

        <div className="max-w-5xl mx-auto overflow-auto">
          <ol className="md:list-decimal flex flex-col gap-2">
            {filesList.length > 0 ? (
              filesList?.map((url, index) => (
                <li key={index} className="">
                  <span className="md:hidden">{index + 1}.</span>
                  <p className="flex flex-col lg:flex-row justify-center items-center gap-2">
                    <a className="underline text-slate-400" href={url} download>
                      {url}
                    </a>
                    <button
                      onClick={() => handleDelete()}
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
              <div className="text-3xl font-bold flex justify-center items-center dark:text-slate-200">
                {" "}
                No files have been uploaded{" "}
              </div>
            )}
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Storage;
