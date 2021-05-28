import React, { useRef, useState, useEffect } from 'react';
import firebase, { firestore, auth } from "../../firebase/index";


const Google = (props) => {
    const GOOGLE_API_KEY = 'AIzaSyDD1bL9fKZ3r1YsNSBNd7kWwVyW3F4FkV4';
    const mapElementRef = useRef();
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const trackingRef = useRef();
    const [trackData, setTrackData] = useState({})
   
    

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', onGoogleMapLoad);
        trackMyLocation();
    }, []);


    const onGoogleMapLoad = () => {
        mapRef.current = new window.google.maps.Map(mapElementRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    const sendMyLocation = (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        firestore.collection("tracking").add({
            // userId: userId,
            lat: latitude,
            lng: longitude,
            timeStamp: new Date()
        });

    };

    const trackMyLocation = async () => {
        trackingRef.current = navigator.geolocation.watchPosition(sendMyLocation, console.error, { maximumAge: 30000 });
    };

    return (
        <div ref={mapElementRef} className="home-container ">
        </div>
    )
}



export default Google;