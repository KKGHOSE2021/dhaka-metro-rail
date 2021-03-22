import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Destination.css';

const Destination = () => {

    const {price} = useParams()
  
    const [destination, setDestination] = useState ({
        pickFrom:'',
        pickTo:''
    })

    const handleChange = (e) => {
        const newDestination = {...destination};
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);        
    }

    const history = useHistory();
    const handleSubmit = (e) => {        
        if (destination.pickFrom && destination.pickTo) { 
            history.push(`/destinationTicketPrice/${price}`);              
        }
        e.preventDefault();

    }
    
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1Ijoic3RheWFyYW5qYW4iLCJhIjoiY2ttaW8zdXMwMGoyOTJva2R4ZmNkM3dmdyJ9.d-IcGqj_aFi5e1UbFznr3w'
             
    });

    
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <label className="text-dark" for="pickFrom">Pick From</label>
                        <input type="text" name="pickFrom" onBlur={handleChange} placeholder="Your start journey" />

                        <label className="text-dark" for="pickTo">Pick To</label>
                        <input type="text" name="pickTo" onBlur={handleChange} placeholder="Your end journey" />

                        <input type="submit" value="Search" />
                    </form> 
                    {/* <DestinationTicketPrice journey={destination}/>                    */}
                </div>

                <div className="col-8 map-div">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '60vh',
                            width: '40vw',
                            backgroundColor: 'lightgrey'
                        }}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[23.812662385222726, 90.41348719173989]} />
                            <ZoomControl/>
                        </Layer>
                    </Map>;
                </div>
            </div>
        </div>
    );
};

export default Destination;