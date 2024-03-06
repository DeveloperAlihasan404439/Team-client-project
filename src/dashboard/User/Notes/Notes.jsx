import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { RiEditFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../shared/Auth/useAuth";
import useNotes from "../../../Hooks/useNotes";
import Loader from "../../../shared/Loader";
import NotesModal from "./NotesModal";
 

const Notes = () => {
  const [notesText, setNotesText] = useState("");
  const axiosPublick = useAxios();
  const { user } = useAuth();
  const [updatedNotes, setUpdatedNotes] = useState({});

  const { notes, isLoading, refetch } = useNotes();
  function hendelNotexPost() {
    if (notesText && user) {
      const notes = {
        notes: notesText,
        user_name: user?.displayName,
        user_Email: user?.email,
        user_images: user?.photoURL,
      };
      axiosPublick.post("/notes", notes).then((res) => {
        if (res?.data) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Notes Uploade",
            showConfirmButton: false,
            background: "#144248",
            color: "#EEEEEE",
            timer: 2000,
          });
        }
      });
    }
  }

  function hendelNotesLength() {
    let notesWord = 100;
    if (notesText) {
      return (notesWord -= notesText.length);
    }
    return notesWord;
  }
  function hendelDeleteNotes(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete the notes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#019D90",
      cancelButtonColor: "#991b1b",
      confirmButtonText: "Yes, delete it!",
      background: "#144248",
      color: "#EEEEEE",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublick.delete(`/notes?id=${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Notes Deteled",
              showConfirmButton: false,
              background: "#144248",
              color: "#EEEEEE",
              timer: 2000,
            });
          }
        });
      }
    });
  }

  function hendelUpdatedNotes(id) {
    setUpdatedNotes({});
    if (id) {
      const updatedNotes = notes.find(
        (updatedNotes) => updatedNotes._id === id
      );
      setUpdatedNotes(updatedNotes);
    }
  }
  return (
    <div className="mx-10 my-5 md:my-10">
      <h1 className="text-3xl font-medium text-[#144248] dark:text-slate-100">Notes</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {notes?.map((notesText) => (
              <div
                key={notesText._id}
                className="relative rounded-2xl p-2 h-[200px] text-[#EEE] bg-[#144248] dark:bg-[#1E293B]"
              >
                <h1 className="me-7 text-[#EEE] text-[17px] dark:text-slate-200">{notesText.notes}</h1>
                <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0 dark:bg-[#27354d] dark:text-slate-100">
                  <h1>{notesText.user_name}</h1>

                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <label
                      htmlFor="my_modal_6"
                      className="text-[#EEE] text-2xl "
                    >
                      <span onClick={() => hendelUpdatedNotes(notesText._id)}>
                        <RiEditFill />
                      </span>
                    </label>
                  </motion.div>
                  <NotesModal updatedNotes={updatedNotes} refetch={refetch} />
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-0 right-0 bg-[#EEE] text-[#144248] text-2xl p-1 rounded-full dark:bg-[#27354d] dark:text-slate-100"
                >
                  <span onClick={() => hendelDeleteNotes(notesText._id)}>
                    <IoCloseSharp />
                  </span>
                </motion.div>
              </div>
            ))}
            <div className="h-[200px] rounded-xl relative">
              <textarea
                onChange={(e) => setNotesText(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Type........"
                className="w-full h-full rounded-xl p-2 text-[#EEE] bg-[#144248] outline-none text-xl dark:bg-[#1E293B] dark:text-slate-100"
              ></textarea>
              <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0 dark:bg-[#27354d] dark:text-slate-100">
                <h1>{hendelNotesLength()} Left</h1>
                <button
                  onClick={hendelNotexPost}
                  className="px-3 py-1 tracking-[3px] rounded bg-[#144248] dark:bg-[#1a2333]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notes;
