import React,{useState} from 'react';
import axios from 'axios';


export default function Register (){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function register(e){
        e.preventDefault()
        const student = { username: username ,
                          password: password,
                          average_grade:null}
        axios.post(`http://localhost:8080/register`,student)
                                 .then( (response) => {
                                    // handle success
                                    //i must check if the response.data JSON object is empty,which means that there is already a student with this identity in the DB
                                        console.log(response);
                                        const r=response.data;
                                        if (r == 1){
                                            alert ('User already exists!')
                                        }else{
                                            alert ('User created')
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
            <div className='grid grid-cols-1 bg-gray-100 flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-2xl font-bold text-center py-6'>Register!!!</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input type="text" className='border p-2' onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input type="password" className='border p-2' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button onClick={register} className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white '>Sign up</button>
                </form>         
            </div>
    )

}