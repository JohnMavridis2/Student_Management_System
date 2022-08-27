import React, { useState,useEffect } from 'react'
import loginImg from '../assets/picture.jpg'
import axios from 'axios'; 
import {Link} from 'react-router-dom';



export default function Login (){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function logIn(e){
        e.preventDefault()

        //check if the prof want to connect
        if (username==='prof' && password==='prof'){
            window.location.href = `http://localhost:3000/prof`;
        }
        
        //else a student wants to connect
        axios.get(`http://localhost:8080/student?username=${username}&password=${password}`)
                                 .then( (response) => {
                                    // handle success
                                    //i must check if the response.data JSON object is empty,which means that there is no student with these identity in the DB
                                        console.log(response);
                                        const r=response.data;
                                        if (Object.keys(r).length === 0){
                                            alert ('User not found!')
                                        }else{
                                            window.location.href = `http://localhost:3000/viewStudent?id=${r.id}`;
                                        }
                                    })
                                 .catch((error)  => {
                                    // handle error
                                    console.log(error);
                                    })
                                 .then(()=> {
                                     // always executed
                                     setUsername('')
                                     setPassword('')
                                  })
    }
   
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} />
            </div>   
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-2xl font-bold text-center py-6'>Student Management System</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input type="text" className='border p-2' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input type="password" value={password} className='border p-2' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button onClick={logIn} className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white '>Log In</button>
                </form> 
                <div className='mx-auto'>
                        <Link to="/register" 
                              className='border w-52 my-5 p-2 bg-red-600 hover:bg-red-400 text-white'>
                        Create an account
                        </Link>                            
                </div>
            </div>
        </div>
    )

}




