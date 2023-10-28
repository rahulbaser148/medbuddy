import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { saveAs } from "file-saver";
import axios from 'axios';


const Details = () => {
    const location = useLocation();
    const [password, setPassword] = useState("");

    const data = location.state?.data;
    const img = data.imageURL;
    const title = data.title;
    console.log(data);
    const handleClick = () => {
        let url = { img }
        saveAs(url, "report");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const downloadReport = async (e) => {
        e.preventDefault();
        try {
            console.log("Calling");
            const data = {
                "password": password,
                "cid": img
            }
            console.log(data);
            await axios.post('http://127.0.0.1:8000/download', data, { responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${title}.pdf`); // Set the desired filename
                document.body.appendChild(link);
                link.click();
            }).catch((err) => {
                console.log(err);
            });
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        <>
            <div className='bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 pb-20 lg:pb-40'>
                <div className='pt-36 w-screen  flex  justify-center items-center overflow-hidden '>
                    <div className='flex lg:space-x-24 w-11/12 flex-col lg:flex-row justify-center items-center lg:items-start px-3 lg:px-20 '>
                        <div className='min-w-max'>
                            <a href={data.imageURL} >
                                <img src={data.imageURL} alt="" className=' h-72 w-72 sm:h-96 sm:w-96 md:h-80 lg:h-[30rem] lg:w-[30rem] border-4 border-black'/>
                            </a>
                        </div>

                        <div className='text-white mt-12 mb-20'>
                            <p className='tracking-wider font-bold text-4xl break-all pb-4'>{data.title}</p>
                            <p className='tracking-wider font-bold text-xl break-all'>Click on the image to download it!</p>

                            <hr />
                            <p className='text-justify text-lg mt-6 tracking-wider font-light'>Description: {data.description}</p>
                            <p className='text-justify mt-6 tracking-wider text-lg'>Recordtime: {data.timestamp}</p>
                            {/* form */}
                            <form className='flex flex-col justify-center' onSubmit={downloadReport}>
                                <div className='mb-4'>
                                <label className='text-white ml-3'>Password</label>
                                <input
                                    onChange={e => handlePasswordChange(e)}
                                    type="text" name='password' placeholder='Enter Password for decryption' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' required />
                                </div>


                                <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

                                <div className='mt-5 flex justify-center'>
                                <button
                                    type='submit'
                                    className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200"
                                >
                                    Download Report
                                </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center mt-10 text-white'>
                </div>
            </div>




        </>
    )
}

export default Details