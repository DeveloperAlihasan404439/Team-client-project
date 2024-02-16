import React, { useState } from 'react';

const TextToVoiceCnv = () => {
    const [textToSpeak, setTextToSpeak] = useState('');
    const [recognizedText, setRecognizedText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isListening, setIsListening] = useState(false);
    let recognition = null;
    const toggleListening = () => {
        if (isListening) {
            recognition.stop(); // Stop recognition
            setIsListening(false); // Update state to indicate not listening
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
        setTextToSpeak(event.target.value);
    };

    const handleSpeak = () => {
        if (textToSpeak.trim() === '') {
            const utterance = new SpeechSynthesisUtterance("Please enter text before initializing.");
            speechSynthesis.speak(utterance);
        } else {
            setErrorMessage('');
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            speechSynthesis.speak(utterance);
        }
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto mt-5 flex justify-between items-center rounded-lg bg-white py-2 px-3">
                <h1 className="text-2xl uppercase tracking-[4px] font-semibold text-[#144248]">
                    Convert text to voice | Voice to text
                </h1>
            </div>

            <div className='lg:flex gap-2'>
                <div className=' lg:w-[50%] w-full bg-white p-3 mt-3 shadow-md'>
                    <div className='border-3 border-gray-500'>
                        <textarea placeholder='Write something...' value={textToSpeak} onChange={handleInputChange} name="" id="" className='w-full h-[20rem] border border-gray-500 rounded-md p-2'></textarea>
                    </div>
                    <div className='flex gap-4'>
                        <button className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 " onClick={handleSpeak}>Speak</button>
                    </div>
                </div>

                <div className=' lg:w-[50%] w-full bg-white p-3 mt-3 shadow-md'>
                    <div className='border-3 border-gray-500'>
                        <textarea placeholder='Voice to text' readOnly value={recognizedText} onChange={handleInputChange} name="" id="" className='w-full h-[20rem] border border-gray-500 rounded-md p-2'></textarea>
                    </div>
                    <div className='flex gap-4'>
                        <button className={`hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 ${isListening ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={toggleListening}>{isListening ? 'Stop Listening' : 'Start Listening'}</button>
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                </div>
            </div>
        </div>
    );
};

export default TextToVoiceCnv;