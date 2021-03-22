import React from 'react';
import './Ticket.css';
import {useHistory} from 'react-router-dom';


const Ticket = (props) => {
    const {passType, price, imgUrl} = props.ticket;
    console.log(imgUrl);
    const history = useHistory();
    const handleBuy = (price) =>{
        history.push(`/destination/${price}`);
    }
 
    return (
        <div className="col-md-3 mt-5">
            <div className="card bg-light align-items-center">
                <div className="card-body">
                    <img className="card-img-top" src={imgUrl} alt=""/>
                    <h5 className="card-title">{passType}</h5>
                    <button onClick={()=>handleBuy(price)} className="btn btn-danger">Buy Now</button>
                    <hr/>
                    <h5 className="card-title">${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Ticket;