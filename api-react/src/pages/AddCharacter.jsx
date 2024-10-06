import axios from 'axios'
import React, { useState } from 'react'

function AddCharacter() {
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

const AddCharacter =(e)=>{

    e.preventDefault(); 

    if (!inputCharacterName || !inputCharacterImg || !inputCharacterGender) {
        alert("يرجى ملء جميع الحقول.");
        return;
    }

axios.post(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment`,{
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
    <div className=''>
        
       <div className=' justify-center'>
       <h1> AddCharacter</h1>

        <form onSubmit={AddCharacter} className='flex flex-col gap-3'>
       <input
  type="text"
  placeholder="name"
  className="input input-bordered input-primary w-full max-w-xs" 
  onChange={Inputcharactername}
  value={inputCharacterName}
  />
       <input
  type="text"
  placeholder="img"
  className="input input-bordered input-primary w-full max-w-xs" 
  onChange={InputCharacterImg}
  value={inputCharacterImg}

  />     <input
  type="text"
  placeholder="gender"
  className="input input-bordered input-primary w-full max-w-xs"
  onChange={Inputgharactergender}
  value={inputCharacterGender}

  />
  <div>
<button type="submit" className='btn'>Add Charcater</button>
</div>
  </form>
</div>
    </div>
  )
}

export default AddCharacter