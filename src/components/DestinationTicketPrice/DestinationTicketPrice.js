import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import img from './TicketData/tickets.png';

const DestinationTicketPrice = () => {

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1Ijoic3RheWFyYW5qYW4iLCJhIjoiY2ttaW8zdXMwMGoyOTJva2R4ZmNkM3dmdyJ9.d-IcGqj_aFi5e1UbFznr3w'
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <div className="card bg-danger">
                        <div className="card-body text-white fs-1 fw-bold">
                        <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Dhaka</TimelineContent>
                        </TimelineItem>                     
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>Narayangong</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <img src={img} alt="Images"/>      
                            <h5 className="card-title">Ticket 1</h5>
                            <h5 className="card-title">$50</h5>       
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <img src={img} alt="Images"/>      
                            <h5 className="card-title">Ticket 2</h5>
                            <h5 className="card-title">$70</h5>       
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <img src={img} alt="Images"/>      
                            <h5 className="card-title">Ticket 3</h5>
                            <h5 className="card-title">$90</h5>       
                        </div>
                    </div>          
                </div>

                <div className="col-8">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '85vh',
                            width: '38vw',
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