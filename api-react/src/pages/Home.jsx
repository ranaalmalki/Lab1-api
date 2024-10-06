import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [character ,setCharacter ]=useState([])

    useEffect(()=>{
        getCharacter();
    },[])

    const getCharacter=()=>{
axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment`)
.then((res)=>{
    console.log(res.data);
    setCharacter(res.data)
})   .catch((error) => {
    console.error("خطأ في جلب الشخصيات:", error);
});
    }
  return (
    <div>
                <Link to="/addcharacter"><button className='btn'>Add</button></Link>
{character.map((e)=>{
return(
   
        <div className=' grid grid-flow-col'>
        <div className='card w-96 border-4 gap-2 '>
            <div className='card-body'>
    <img
    src={e.image}
    />
    <h1>{e.name}</h1>
    </div>
    </div>
    </div>

)
})}
    </div>
  )
}

export default Home