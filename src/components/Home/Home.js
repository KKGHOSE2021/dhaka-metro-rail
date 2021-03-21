import React, { useEffect, useState } from 'react';
import Background from '../Images/bg-image-home.png';
import './Home.css';
import data from '../FakeData/FakeData.json';
import Ticket from '../Ticket/Ticket';
import logoImg from '../Images/logo-img.png';

const Home = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(()=>{
        setTickets(data);
    }, [])
    return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row mt-5"> 
                        {tickets.map(ticket => <Ticket ticket={ticket}/>)}                    
                    </div>  
                </div>
            </div>


    );
};

export default Home;