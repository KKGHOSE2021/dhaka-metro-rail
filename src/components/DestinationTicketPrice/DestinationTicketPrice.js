import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DestinationTicketPrice = () => {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1Ijoic3RheWFyYW5qYW4iLCJhIjoiY2ttaW8zdXMwMGoyOTJva2R4ZmNkM3dmdyJ9.d-IcGqj_aFi5e1UbFznr3w'            
    });

    const setupMap = (center) => {
        const map = new ReactMapboxGl({
            container:"map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: center,
            zoom: 15
        })

        const NavigationControl = new ReactMapboxGl();
    }
    const successLocation = (position) => {
        console.log(position);
        setupMap([position.coords.longitude, position.coords.latitude])
    }
    const errorLocation = () => {
        setupMap([23.812662385222726, 90.41348719173989])
        
    }

    const accurateLocation = navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">                
                    <form>
                        <label className="text-dark" for="pickFrom">Pick From</label>
                        <input type="text" id="pickFrom" name="pickFrom" placeholder="Your start journey"/>

                        <label className="text-dark" for="pickTo">Pick To</label>
                        <input type="text" id="pickTo" name="pickFrom" placeholder="Your end journey"/>

                        <input type="submit" value="Search"/>
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
    

export default DestinationTicketPrice;