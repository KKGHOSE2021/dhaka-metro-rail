import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Destination.css';


const Destination = () => {
    const {id} = useParams();
    const [destination, setDestination] = useState ({
        pickFrom:'',
        pickTo:''
    })

    const handleChange = (e) => {
        const newDestination = {...destination};
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);        
    }

    const handleSubmit = (e) => {        
        if (destination.pickFrom && destination.pickTo) {

        }
        e.preventDefault();

    }
    
    // const handleBlur = (e) => {
    //     setDestination({[e.target.name] : e.target.value})
    //     console.log(destination);
        
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
            pickFrom: destination.pickFrom,
            pickTo: destination.pickTo
        }        
        setDestination(form); 
        
    }

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1Ijoic3RheWFyYW5qYW4iLCJhIjoiY2ttaW8zdXMwMGoyOTJva2R4ZmNkM3dmdyJ9.d-IcGqj_aFi5e1UbFznr3w'            
    });

    
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <form onSubmit={handleSubmit}>
                        <label className="text-dark" for="pickFrom">Pick From</label>
                        <input type="text" name="pickFrom" onBlur={handleChange} placeholder="Your start journey" />

                        <label className="text-dark" for="pickTo">Pick To</label>
                        <input type="text" name="pickTo" onBlur={handleChange} placeholder="Your end journey" />

                        <input type="submit" value="Search" />
                    </form>
                </div>

                <div className="col-8">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '60vh',
                            width: '35vw',
                            backgroundColor: 'lightgrey'
                        }}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[23.812662385222726, 90.41348719173989]} />
                        </Layer>
                    </Map>;
                </div>
            </div>
        </div>
    );
};

export default Destination;