import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";

const RecievedEmails = () => {
    const [emails, setEmails] = useState([]);
    const [copied, setCopied] = useState(false);
    const { user } = useContext(AuthContext)
    const { email } = useParams();
    const [isLoading, setIsLoading] = useState(null)
    const [text, setText] = useState('');
    const [textInput, setTextInput] = useState('');
    const [fontStyles, setFontStyles] = useState('');
    const [textColor, setTextColor] = useState('')
    const [allStyles, setAllStyles] = useState('')
    const [fontSize, setFontSize] = useState('')
    const [textStyle, setTextStyle] = useState('')
    const { data: tempMail = {}, refetch } = useQuery({
        queryKey: ['tempMail'],
        queryFn: async () => {
            const res = await axios.get(`https://server-side-bice.vercel.app/users/${email}`);
            return res.data;
        }
    });
    const inboxIds = tempMail.inboxId;
    useEffect(() => {
        axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                refetch()
                setEmails(res.data)
            })
    }, [inboxIds, refetch])

    const reloadEmails = () => {
        setIsLoading(true)
        axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                setEmails(res.data)
                setIsLoading(false)
            })
    }

    const handleFileChange = async event => {
        const file = event.target.files[0];
        if (file) {
            try {
                const reader = new FileReader();
                reader.onload = async function (event) {
                    const pdfData = event.target.result.split(',')[1]; // Extract base64 data
                    const response = await axios.post('https://server-side-bice.vercel.app/extractTextFromPDF', { pdfData });
                    setText(response.data.text);
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error extracting text from PDF:', error);
            }
        }
    };


    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };


    const handleConvertToPdf = async () => {
        try {
            const response = await axios.post('https://server-side-bice.vercel.app/api/convertToPdf', { textInput, allStyles }, { responseType: 'blob' });

            // Create a Blob object from the PDF data
            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

            // Create a temporary URL for the Blob
            const pdfUrl = URL.createObjectURL(pdfBlob);

            // Set the PDF URL in state to display as a preview
            // Create an anchor element with the URL
            const downloadLink = document.createElement('a');
            downloadLink.href = pdfUrl;
            downloadLink.download = 'converted.pdf'; // Set the filename
            downloadLink.click();

            // Clean up
            URL.revokeObjectURL(pdfUrl);
        } catch (error) {
            console.error('Error converting text to PDF:', error);
        }
    };

    const fontStyle = (style) => {
        //setFontStyles(selectedStyles => [...selectedStyles, style])
        setFontStyles(style)
    }

    const handleColorChange = (e) => {
        setTextColor(e)
    }

    
    const handleFontSize = (e) =>{
        setFontSize(e)
    }

    useEffect(() => {
        const combinedStyles = [{ align: fontStyles, textColor: textColor, fontSize: fontSize, textStyle: textStyle }];
        setAllStyles(combinedStyles);
    }, [fontStyles, textColor, fontSize, textStyle]);
    console.log(allStyles)
    const fontSizes = Array.from({ length: 30 }, (_, index) => index + 1);
    const fonts = ['Normal', 'Italic', 'Oblique', 'Inherit', 'Initial', 'Revert', 'Revert-layer', 'Unset'];
    
    const handleFontStyles = (e) =>{
        setTextStyle(e)
    }
    return (
        <div className="mt-4">


            <div className='bg-gray-500 bg-opacity-25 lg:w-[50%] m-auto p-3 mb-6 rounded-md'>
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-center  text-3xl drop-shadow font-bold text-[#144248]'>Inbox</h2>
                    </div>
                    <div>
                        {
                            isLoading ? (
                                <button className="btn btn-success btn-outline btn-md">Loading...</button>
                            ) : (
                                <button onClick={() => reloadEmails()} className="btn btn-success btn-outline btn-md">Reload</button>
                            )
                        }
                    </div>
                </div>
                {
                    user ? (
                        tempMail?.length <= 0 ? (
                            <h2 className="text-center text-xl mt-6 bg-yellow-500 bg-opacity-40 p-3 border border-gray rounded-md">Reload to see the result make sure you used it somewhere</h2>
                        ) : (
                            emails?.map((mail, index) => <GetMessages key={index} mail={mail} index={index}></GetMessages>)

                        )
                    ) : (
                        <h2 className="text-[#144248] text-2xl text-center bg-red-500 bg-opacity-20 p-4 rounded-md border border-[#144248]">Login Required To See Inbox</h2>
                    )
                }
            </div>

            <div className="lg:w-[50%] m-auto p-2 bg-gray-500 bg-opacity-25">
                <div className="flex justify-between">

                    <div>
                        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                    </div>
                    <div>
                        <button onClick={handleCopy} className="btn-success btn btn-md btn-outline">{copied ? 'Copied!' : 'Copy'}</button>
                    </div>
                </div>
                <div className="mt-1 p-2">

                    <textarea name="" id="" readOnly value={text} className="w-full p-2" cols="30" rows="10"></textarea>
                </div>


            </div>
            <div className="p-3 mt-4 lg:w-[50%] m-auto bg-gray-500 bg-opacity-25">
                <div className="flex gap-2 mb-2">
                    <button onClick={() => fontStyle('center')} className="btn btn-sm btn-success btn-outline">Align Center</button>
                    <button onClick={() => fontStyle('left')} className="btn btn-sm btn-success btn-outline">Align Left</button>
                    <button onClick={() => fontStyle('right')} className="btn btn-sm btn-success btn-outline">Align Right</button>
                    <input type="color" className="btn btn-sm btn-success btn-outline" onChange={(event) => handleColorChange(event.target.value)} />
                    <select onChange={(event) => handleFontSize(event.target.value)}  className="select select-bordered w-[6rem] btn-sm">
                        <option disabled selected>Font Size</option>
                        {
                            fontSizes?.map(number => <option key={number}>{number}</option>)
                        }
                    </select>
                    <select onChange={(event) => handleFontStyles(event.target.value)}  className="select select-bordered w-[6rem] btn-sm">
                        <option disabled selected>Font Styles</option>
                        {
                            fonts?.map(font => <option key={font}>{font}</option>)
                        }
                    </select>
                    <button onClick={handleConvertToPdf} className=" btn btn-sm btn-success">Download</button>

                </div>
                <div>
                    <textarea style={{ color: textColor, fontSize: `${fontSize}px`, fontStyle: textStyle.toLowerCase() }} className={`text-${fontStyles} text-${fontSize} w-full p-2 text-${textColor}`} required value={textInput} onChange={e => setTextInput(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    );
};

export default RecievedEmails;