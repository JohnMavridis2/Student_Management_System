import React , {useState , useEffect} from 'react';
import { useSearchParams} from 'react-router-dom';
import axios from 'axios';


export default function Student (){

    const [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get('id')
    const name=searchParams.get('name')
    const [username, setUsername] = useState('')
    const [grade, setGrade] = useState(null)
    const [studentTests,setStudentTests]=useState([])


    function getAndPrintStudent(id) {
        axios.get(`http://localhost:8080/oneStudent1?id=${id}`)
        .then( (response) => {
           // handle success
               console.log(response)
               const r=response.data
               setUsername(r.username)
               setGrade(r.average_grade)
               getAndPrintStudentsTests(id)
           })
        .catch((error)  => {
           // handle error
           console.log(error);
           })
        .then(()=> {
            // always executed
         })    
    }
    
    function getAndPrintStudentsTests(id) {
      axios.get(`http://localhost:8080/oneStudent2?id=${id}`)
        .then( (response) => {
           // handle success
               console.log(response)
               const r=response.data
               setStudentTests(r)
           })
        .catch((error)  => {
           // handle error
           console.log(error);
           })
        .then(()=> {
            // always executed
         })    
    }

    
    
    useEffect(() => {
        getAndPrintStudent(id)
      }, []); 
    

    return(

        <div className='grid grid-cols-1 bg-gray-100 flex-col justify-center mx-auto'>
            <div className='mx-auto' >    
                <h2 className='text-3xl font-bold text-center py-6'>{username}</h2>   
                <span className='font-light leading-relaxed mt-0 mb-4 text-sky-800 text-2xl' >Average grade : </span>
                <span className='text-slate-900 text-2xl' >{grade}</span>     
            </div> 
            
            <div className='mx-auto m-4'>
                <table className='text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Date
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Test Name
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Grade
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { studentTests.map(studentTest=>
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {studentTest.t_stamp}
                                </th>
                                <td className='py-4 px-6'>
                                    {studentTest.name}
                                </td>
                                <td className='py-4 px-6'>
                                    {studentTest.grade}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

