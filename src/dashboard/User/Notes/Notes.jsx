import { motion, useDragControls } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { RiEditFill } from "react-icons/ri";
import Swal from "sweetalert2";
import NotesModal from "./NotesModal";
import useAuth from "../../../shared/Auth/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";
import Loader from "../../../shared/Loader";
import useNotes from "../../../Hooks/useNotes";
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
        if (res?.data?.insertedId) {
          refetch();
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

  const dragControls = useDragControls()

function startDrag(event) {
  dragControls.start(event, { snapToCursor: true })
}
  return (
    <div  className="mx-10 my-5  md:my-10">
      <h1 className="text-3xl font-medium text-[#144248]">Notes</h1>
      {/* <input type="text" className="input-text"/> */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {notes?.map((notesText) => (
              <motion.div
              drag dragControls={dragControls} 
              // dragConstraints={{ top: 0, bottom: 0,left:0,right:0 }}
                key={notesText._id}
                className="relative rounded-2xl p-2 h-[200px] text-[#EEE] bg-[#144248]"
              >
                <div className="me-4 text-[#EEE]">
                  <h1>{notesText.notes}</h1>
                </div>
                <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0">
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
                  className="absolute top-0 right-0 bg-[#EEE] text-[#144248] text-2xl p-1 rounded-full"
                >
                  <span onClick={() => hendelDeleteNotes(notesText._id)}>
                    <IoCloseSharp />
                  </span>
                </motion.div>
              </motion.div>
            ))}
            <div className="h-[200px] rounded-xl relative">
              <textarea
                onChange={(e) => setNotesText(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Type........"
                className="w-full h-full rounded-xl p-2 text-[#EEE] bg-[#144248] outline-none text-xl"
              ></textarea>
              <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0">
                <h1>{hendelNotesLength()} Left</h1>
                <button
                  onClick={hendelNotexPost}
                  className="px-3 py-1 tracking-[3px] rounded bg-[#144248]"
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
