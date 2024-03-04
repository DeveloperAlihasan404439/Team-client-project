import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
export default function NotesModal({ updatedNotes, refetch }) {
  const [notesText, setNotesText] = useState("");
  const [open, setOpon] = useState(true);
  const axiosPublick = useAxios();
  function hendelUpdatedeNotes() {
    setOpon(false);
    axiosPublick
      .patch(`/notes/update/${updatedNotes._id}`, { notesText: notesText })
      .then((res) => {
        if (res.data.matchedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Notes Updated",
            showConfirmButton: false,
            background: "#144248",
            color: "#EEEEEE",
            timer: 2000,
          });
        }
      });
  }

  useEffect(() => {
    setOpon(true);
  }, [open]);
  return (
    <>
      {open ? (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box bg-[#144248]">
              <textarea
                defaultValue={updatedNotes?.notes}
                onClick={(e) => setNotesText(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Type........"
                className="w-full h-full text-[#EEE] bg-transparent outline-none text-xl"
              ></textarea>
              <div className="flex gap-3 justify-end items-center">
                <div className="modal-action">
                  <label
                    onClick={hendelUpdatedeNotes}
                    className="btn text-[#144248] tracking-widest"
                  >
                    Submit!
                  </label>
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my_modal_6"
                    className="btn text-[#144248] tracking-widest"
                  >
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
