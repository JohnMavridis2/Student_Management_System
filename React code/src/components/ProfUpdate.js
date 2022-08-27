import React, { useState } from 'react'
import axios from 'axios';

export default function ProfUpdate (){

    const [username, setUsername] = useState('');
    const [test, setTest] = useState('');
    const [timeStamp,setTimeStamp]=useState(null)
    const [grade, setGrade] = useState(null);

    function insert(e){
        e.preventDefault()

        const data =  { username: username ,
                        test:test,
                        timeStamp:timeStamp,
                        grade:grade
                      }

        axios.post('http://localhost:8080/insertTest',data)
                   .then( (response) => {
                      // handle success
                          console.log(response);
                          const r=response.data;
                          if (r == 1){
                              alert ('User does not exist!')
                          }else{
                              alert ('success!')
                          }
                      })
                   .catch((error)  => {
                      // handle error
                      console.log(error);
                      })
                   .then(()=> {
                       // always executed
                       setUsername('')
                       setTest('')
                       setTimeStamp(null)
                       setGrade(null)
                    })
    }
    return(

        <div className='grid grid-cols-1 bg-gray-100 flex-col justify-center '>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <div className='flex flex-col py-2'>
                        <label>The student with the username :</label>
                        <input type="text" className='border p-2' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>wrote the test :</label>
                        <input type="text" className='border p-2' value={test} onChange={(e)=>setTest(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>on (YYYY-MM-DD) :</label>
                        <input type="text" className='border p-2' value={timeStamp} onChange={(e)=>setTimeStamp(e.target.value)} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>and his/her grade was :</label>
                        <input type="text" className='border p-2' value={grade} onChange={(e)=>setGrade(e.target.value)} />
                    </div>
                    <button onClick={insert} className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white '>Insert test </button>
                </form>
        </div>



    )

}