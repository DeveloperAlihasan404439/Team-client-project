import { useContext, useState } from "react";

import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../provider/AuthProvider";
import useNotes from "../../Hooks/useNotes";
import { MdOutlineSettingsVoice } from "react-icons/md";
const Notes = () => {
  const [notesText, setNotesText] = useState("");
  const [isVoice, setIsVoice] = useState(false)
  const axiosPublick = useAxios();
  const { user } = useContext(AuthContext);
  const [recognizedText, setRecognizedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSaveVoiceNotes = () => {
    if (recognizedText && user) {
      const notes = {
        notes: recognizedText,
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

  const handleVoice = (e) => {
    setIsVoice(true)
  }

  console.log(recognizedText)

  let recognition = null;


  const toggleListening = () => {
    setIsVoice(true)
    if (isListening) {
      recognition.stop(); // Stop recognition
      setIsListening(false); // Update state to indicate not listening
      setIsVoice(false)
    } else {
      recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;

      recognition.onstart = () => {
        console.log('Speech recognition started');
        setIsListening(true); // Update state to indicate listening
      };

      recognition.onend = () => {
        setIsListening(false); // Update state when recognition ends
      };

      recognition.onresult = (event) => {
        const speechToText = event.results[event.results.length - 1][0].transcript;
        setRecognizedText(prevText => prevText + ' ' + speechToText);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setErrorMessage('Speech recognition error. Please try again.');
      };

      recognition.start(); // Start recognition
    }
  };

  const handleInputChange = (event) => {
    console.log(event)
    setTextToSpeak(event.target.value);
  };

  function hendelNotesLength() {
    let notesWord = 100;
    if (notesText) {
      return (notesWord -= notesText.length);
    }
    return notesWord;
  }
  return (
    <div className="md:mr-16 my-5 md:my-10">
      <h1 className="text-3xl font-medium text-[#144248]">Notes</h1>
      {/* <input type="text" className="input-text"/> */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {notes?.map((notesText) => (
          <div
            key={notesText._id}
            className="relative rounded-xl p-2 h-[200px] text-[#EEE] bg-[#144248]"
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
        <div className="h-[200px] rounded-xl relative">
          {
            isVoice ? (
              <>

                <textarea
                  onChange={(e) => handleInputChange(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  value={recognizedText}
                  rows="6"
                  placeholder="Click Listen"
                  className="w-full h-full rounded-xl p-2 text-[#EEE] bg-[#144248] outline-none text-xl"
                ></textarea>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              </>
            ) : (
              <textarea
                onChange={(e) => setNotesText(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Type........"
                className="w-full h-full rounded-xl p-2 text-[#EEE] bg-[#144248] outline-none text-xl"
              ></textarea>
            )
          }
          <div className="px-5 py-1 w-full h-[40px] bg-[#017E77] text-[#EEE] border-none rounded-b-xl flex justify-between items-center absolute left-0 bottom-0">
            <h1>{hendelNotesLength()} Left</h1>

            {
              isVoice ? (
                <button
                  onClick={handleSaveVoiceNotes}
                  className="px-3 py-1 tracking-[3px] rounded bg-[#144248]"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={hendelNotexPost}
                  className="px-3 py-1 tracking-[3px] rounded bg-[#144248]"
                >
                  Save
                </button>
              )
            }

            
            
              
                <button
                  onClick={toggleListening}
                  className="px-3 py-1 tracking-[3px] rounded bg-[#144248]"
                >
                  <MdOutlineSettingsVoice />
                </button>
              
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default Notes;
