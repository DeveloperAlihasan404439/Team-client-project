import { useContext, useState } from "react";
import HomepageUi from "../Shared/HomePageUI/HomepageUi";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../provider/AuthProvider";
import useNotes from "../../Hooks/useNotes";

const Notes = () => {
  const [notesText, setNotesText] = useState("");
  const axiosPublick = useAxios();
  const { user } = useContext(AuthContext);

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
  return (
    <HomepageUi>
      <div>
        <h1 className="text-3xl font-medium text-[#144248]">Notes</h1>
        {/* <input type="text" className="input-text"/> */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {notes?.map((notesText) => (
            <div
              key={notesText._id}
              className="relative rounded-xl p-2 h-[180px] text-[#EEE] bg-[#144248]"
            >
              <h1>{notesText.notes}</h1>
              <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0">
                <h1>{notesText.user_name}</h1>
                <img
                  src={notesText.user_images}
                  alt=""
                  className="w-7 h-7 rounded-full"
                />
              </div>
            </div>
          ))}
          <div className="h-[180px] rounded-xl relative">
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
      </div>
    </HomepageUi>
  );
};

export default Notes;
