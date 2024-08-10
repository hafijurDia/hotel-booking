import React, { useEffect, useState } from 'react'
import bannerImg from '../../../assets/images/4056.jpg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBed } from 'react-icons/fa';
import { FaPerson } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import roomData from '../../../data/rooms.json';

function Home() {
  const [rooms, setRooms] = useState([]);
  console.log(rooms);

  useEffect(()=>{
    fetch('http://localhost:5000/rooms')
    .then(res => res.json())
    .then(data => setRooms(data));
  },[])

  return (
    <>
     <section>
      <img className='w-100' src={bannerImg} alt="" />
     </section>
     <section className='my-5'>
      <Container>
      <Row xs={1} md={3} className="g-4">
        {
          rooms.map(room => <div key={room.id}>
        <Col>
          <Card>
            <Card.Body>
            <Card.Title>{room.name}</Card.Title>
            <Card.Img variant="top" src={room.image} />
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <span><FaBed />: {room.bet}</span>
                <span><FaPerson /> : {room.guset}</span>
                <span><BsCurrencyDollar />: {room.price}</span>
                <span><Button>Book</Button></span>
              </div>
            </Card.Body>
          </Card>
        </Col>


          </div> )
        }
      
    </Row>
      </Container>
     </section>
    </>
  )
}

export default Home;
