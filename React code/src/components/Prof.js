import React from 'react';
import {Link} from 'react-router-dom';

export default function Prof (){

    return(
        <div className='grid grid-cols-1 bg-gray-100 flex-col justify-center '> 
                            
                            <Link to="/prof_del" 
                                className='border w-52 m-8 p-4 bg-red-600 hover:bg-red-400 text-white mx-auto text-center'>
                            Delete students
                            </Link>
                        
                            
                            <Link to="/prof_update" 
                                className='border w-52 m-8 p-4 bg-red-600 hover:bg-red-400 text-white mx-auto text-center'>
                            Insert grades at tests
                            </Link>   

                            
                                                  
            
        </div>
    )

}