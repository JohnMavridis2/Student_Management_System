import React, { useState } from 'react'
import axios from 'axios';

export default function ProfDel (){

    const [username, setUsername] = useState('');

    function del(e){
        e.preventDefault()
        axios.delete(`http://localhost:8080/del/${username}`)
                                 .then( (response) => {
                                    // handle success
                                        console.log(response);
                                        const r=response.data;
                                        if (r === 0){
                                            alert ('User deleted!')
                                        }else{
                                            alert ('User not found!')
                                        }
                                    })
                                 .catch((error)  => {
                                    // handle error
                                    console.log(error);
                                    })
                                 .then(()=> {
                                     // always executed
                                     setUsername('')
                                  })
    }

    return(

        <div className='grid grid-cols-1 bg-gray-100 flex-col justify-center '>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <div className='flex flex-col py-2'>
                        <label>Delete student with username :</label>
                        <input type="text" className='border p-2' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <button onClick={del} className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white '>Delete student</button>
                </form>
        </div>
        
    )

}