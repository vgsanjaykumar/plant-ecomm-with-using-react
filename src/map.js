import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div style={{ height: '500px', width: '100%' }} className="mt-5 mb-5">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    );
}