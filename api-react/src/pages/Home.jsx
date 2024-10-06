import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
    const [character ,setCharacter ]=useState([])
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredCharacters = character.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteCharacter =(id)=>{
        Swal.fire({
            title: "هل تريد حذف الشخصية؟",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "حذف",
            denyButtonText: "لا تحذف"
        }).then((result) => {
        if (result.isConfirmed) {

        axios.delete(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment/${id}`)
        .then(()=>{
            Swal.fire("Delete", "", "success");

            getCharacter();
        }) 
        .catch((error) => {
            console.error("error", error);
            Swal.fire("erorr", "", "error");
        });

    } else if (result.isDenied) {
        Swal.fire("Nothing happen", "", "info");
    }
})
}
  return (
    <div>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className='border-4 border-yellow-400 rounded-r-full p-5 sticky top-0 left-0 w-40 bg-amber-50'>
        <h1 className='text-2xl'>do you want add more Character or edit ?</h1>
                <Link to="/addcharacter"><button className='btn bg-yellow-400'>Add</button></Link>

                </div>
                <div className="flex flex-wrap gap-4 justify-center">
{filteredCharacters.map((e)=>{
return(
   
        <div className='card w-96 border-4 gap-2 '>
            <div className='card-body'>
    <img
    src={e.image}
    />
    <h1>{e.name}</h1>
    <button className='btn' onClick={()=>{deleteCharacter(e.id)}}>Delete</button>
    <Link to={`/updatecharacter/${e.id}`}><button className='btn bg-yellow-400'>Edit</button></Link>

    </div>
    </div>

)
})}
    </div>

    </div>
  )
}

export default Home