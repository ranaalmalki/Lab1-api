import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom';
function UpdateCharacter() {
    const { id } = useParams();

    const [inputCharacterName , setInputCharacterName ]=useState("")
    const [inputCharacterImg , setInputCharacterImg ]=useState("")
    const [inputCharacterGender , setInputCharacterGender ]=useState("")

    const Inputcharactername=(e)=>{
        setInputCharacterName(e.target.value)
    }
    
    const InputCharacterImg=(e)=>{
        setInputCharacterImg(e.target.value)
    }
    
    const Inputgharactergender=(e)=>{
        setInputCharacterGender(e.target.value)
    }

    const EditCharacter =(e)=>{

        e.preventDefault(); 
    
        if (!inputCharacterName || !inputCharacterImg || !inputCharacterGender) {
            alert("fill");
            return;
        }
    
    axios.put(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment/${id}`,{
        name:inputCharacterName,
        image:inputCharacterImg,
        gender:inputCharacterGender
    })
    .then((res)=>{
        console.log("////",res.data);
        setInputCharacterName("");
        setInputCharacterImg("");
        setInputCharacterGender("");
        
    })
    .catch((error) => {
        console.error("Error adding character:", error);
    });
    }
    
  return (
    <><NavBar/>
    <div className='flex flex-col items-center p-20'>
        
       <div className=' border-4 p-7 border-yellow-400'>
       <h1 className='bg-amber-400 text-2xl text-center'> Edit Character</h1>

        <form onSubmit={EditCharacter} className='flex flex-col gap-3'>
       <input
  type="text"
  placeholder="name"
  className="input input-bordered  w-full max-w-xs" 
  onChange={Inputcharactername}
  value={inputCharacterName}
  />
       <input
  type="text"
  placeholder="img"
  className="input input-bordered  w-full max-w-xs" 
  onChange={InputCharacterImg}
  value={inputCharacterImg}

  />                           <select
  type="text"
  placeholder="gender"
  className="input input-bordered  w-full max-w-xs"
  onChange={Inputgharactergender}
  value={inputCharacterGender}

  >
    <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
  <div>
<button type="submit" className='btn bg-amber-400'>Edit Charcater</button>
</div>
  </form>
</div>
    </div>
    </>
  )
}

export default UpdateCharacter