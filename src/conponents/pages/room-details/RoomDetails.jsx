import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBed } from 'react-icons/fa';
import { FaPerson } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";



const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const {loading} = useContext(AuthContext);

    console.log(id)
    

    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, [id]);

    console.log(room);

    if (loading || !room) {
        return (
            <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1000,
            }}
          >
            <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#000' }}>
              Loading...
            </div>
          </div>
          )
    }

    return (
       <Container>
            <div className='d-flex my-5 gap-5'>
                <div className='w-50'>
                    <img className='w-100 rounded' src={room.image} alt="" />
                </div>
                <div className='w-50'>
                    <h4>Name: {room.name}</h4>
                    <p className=''><FaBed /> Bed: {room.bet}</p>
                    <p><FaPerson /> Person allow: {room.guset}</p>
                    <p><BsCurrencyDollar /> Price:  {room.price}</p>
                    <Link to="/booking">Resever Now</Link>
                </div>
            </div>
       </Container>
    );
};


export default RoomDetails;


