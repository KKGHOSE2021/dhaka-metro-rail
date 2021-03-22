import React, { useEffect, useState } from 'react';
import './Home.css';
import data from '../FakeData/FakeData.json';
import Ticket from '../Ticket/Ticket';

const Home = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(()=>{
        setTickets(data);
    }, [])
    return (
            <div className="container-fluid">
                <div className="container bg-img-home">
                    <div className="row mt-5"> 
                        {tickets.map(ticket => <Ticket ticket={ticket}/>)}                    
                    </div>  
                </div>
            </div>


    );
};

export default Home;