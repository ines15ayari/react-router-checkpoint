import React from 'react'
import "./MovieCard.css"
import Rate from "../Rate"
import {Card,Button} from "react-bootstrap"
import {Link } from 'react-router-dom';
import MovieTeaser from '../MovieTeaser'

export default function Cardd ({movie:{id,name, image,description,releaseDate,rate}}) { 
return(
 
  <div style={{display:'flex'}}>
    
  <Card className="cards"style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Rate rate={rate}/>
    <Card.Text>
{description}
<br/>
{releaseDate}
    </Card.Text>
    <Link to={`/${id}`} ><Button variant="primary" >More..</Button></Link>
  </Card.Body>
</Card>
</div>
)

}