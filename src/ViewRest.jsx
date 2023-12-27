import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col, ListGroup} from 'react-bootstrap'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import RestOp from './RestOp';
import RestREview from './RestREview';

function ViewRest() {
  const [restDetails,setRestDetails]=useState({})
    //useParams - Used to get path parameter from the url
  // const paraId=useParams()
  // console.log(paraId.id);

  // destructure
  const {id}=useParams()
  console.log(id);
  // Api call to get details of particular restaurant using the path parameter
  const base_url='https://restaurant-backend-js0g.onrender.com/restaurants'
  const fetchRest = async()=>{
    const result= await axios.get(`${base_url}/${id}`)
    setRestDetails(result.data); // Update state with the fetched data
    console.log(restDetails);
  }
  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} alt="" style={{width:'450px', height:'500px', margin:'40px'}} />
        </Col>
        <Col>
      <div class="container my -5 p-5">
        <ListGroup>
          <h1 className='text-center'>{restDetails.name}</h1>
          <ListGroup.Item>{restDetails.name}</ListGroup.Item>
          <ListGroup.Item>Address:{restDetails.address}</ListGroup.Item>
          <ListGroup.Item>Neighborhood:{restDetails.neighborhood}</ListGroup.Item>

          <ListGroup.Item>Cuisine type:{restDetails.cuisine_type}</ListGroup.Item>
          <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
          <ListGroup.Item><RestREview review={restDetails.reviews}/></ListGroup.Item>
        </ListGroup>
      </div>
      </Col>
      </Row>

    </div>
    
  )
}

export default ViewRest