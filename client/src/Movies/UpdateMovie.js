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
},[props.movie]);

const onChange=e=>{
    e.persist();
    setMovie ({...movie, [e.target.name]: e.target.value})
}
const upDate=e=>{
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${props.match.params.id}`,movie)
    .then(()=>{props.history.push(`/`)}
        
    )
}
return(
    <>
<form onSubmit={upDate} >
    <div className="UpdateMovie">
    <label >Title</label>
    <input type="text" name="title" onChange={onChange} value={movie.title}/>
    <label >Director</label>
    <input type="text" name="director"onChange={onChange} value={movie.director}></input>
    <label >Metascore</label>
    <input type="text" name="metascore"onChange={onChange} value={movie.metascore}></input>
    <label >Stars</label>
    <input type="text" name="stars"onChange={onChange} value={movie.stars}></input>
    </div>
<button>Cancle</button>    

<button type="submit">Update</button>

</form>


</>
)

}

export default UpdateMovie;