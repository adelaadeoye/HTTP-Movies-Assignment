import React, {useEffect, useState} from 'react';
import axios from 'axios'


const initialMovie={
    title:'',
    director:'',
    metascore:'',
    stars:''
}

const UpdateMovie =(props)=>{

  console.log("para",props.match.params.id)  
const[movie, setMovie]=useState(initialMovie);
useEffect(()=>{
    const movieToEdit=props.movie

    if(movieToEdit) setMovie(movieToEdit)
});

const onChange=e=>{
    setMovie ({...movie, [e.target.name]: e.target.value})
}

return(
    <>
<form >
    <div className="UpdateMovie">
    <label >Title</label>
    <input type="text" name="title" onChange={onChange} value={movie.director}/>
    <label >Director</label>
    <input type="text" name="director" value=""></input>
    <label >Metascore</label>
    <input type="text" name="metascore" value=""></input>
    <label >Stars</label>
    <input type="text" name="stars" value=""></input>
    </div>
<button>Cancle</button>    

<button>Update</button>

</form>


</>
)

}

export default UpdateMovie;