import React from 'react';
import './searchcard.style.css'
export const Search = ({placeholder,handlechange}) => (
    <div>
        <input 
         className='search'
         type='search' 
         placeholder={placeholder} 
         onChange={handlechange}/>
    </div>
     );