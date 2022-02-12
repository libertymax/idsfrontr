import React, { Component } from 'react'; 
import GoogleMapReact from 'google-map-react';
import { KEY } from "../config";

const AnyReactComponent = ({ text }) => <div>{text}</div>; 
class SimpleMap extends Component { 
    static defaultProps = { 
        center: { 
            lat: 9.930623, 
            lng: 8.912093 
        }, 
        zoom: 11 
    }; 
    render() { 
        return ( 
            // Important! Always set the container height explicitly 
            <div style={{ height: '100vh', width: '100%' }}> 
            <GoogleMapReact 
                bootstrapURLKeys={{ key: KEY }} 
                defaultCenter={this.props.center} 
                defaultZoom={this.props.zoom} 
            > 
            <AnyReactComponent 
                lat={9.930623} 
                lng={8.912093} text="My Marker" 
            /> 
            </GoogleMapReact> 
            </div> 
            ); 
        } 
    } 
    
export default SimpleMap;