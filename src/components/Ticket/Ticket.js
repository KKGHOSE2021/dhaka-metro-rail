import React from 'react';
import './Ticket.css';
import {useHistory} from 'react-router-dom';

const Ticket = (props) => {
    const {id, passType, price, imgUrl} = props.ticket;
    console.log(imgUrl);
    const history = useHistory();
    const handleBuy = (id) =>{
        history.push(`/destination/${id}`);
    }
 
    return (
        <div className="col-md-3 ">
            <div className="card bg-light align-items-center">
                <div className="card-body">
                    <img className="" src={imgUrl} alt="" srcset=""/>
                    <h5 className="card-title">{passType}</h5>
                    <button onClick={()=>handleBuy(id)} className="btn btn-danger">Buy Now</button>
                    <hr/>
                    <h5 className="card-title">${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Ticket;