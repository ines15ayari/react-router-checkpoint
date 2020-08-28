import React from 'react'
import { Link } from 'react-router-dom'
import { movieData } from './movieData'

export default function MovieTeaser({ match }) {
    return (
    <div style={{backgroundColor:'black',textAlign:'center',color:'white',border:'white'}}>
        <Link to="/">Home</Link>
            <div>
            {movieData.map((el) => el.id == match.params.id ?
             <div>
                 <h1 style={{color:'red'}}>Description page</h1>
                <h1>name:</h1><p>{el.name}</p>
                <h1>Description:</h1><p>{el.description}</p>
                <h1>Teaser:</h1><p> <button><a href={el.teaser}>teaser</a></button></p></div> : null)}
            </div>

    </div>
    )
}