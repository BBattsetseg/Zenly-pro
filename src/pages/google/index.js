import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { firestore} from "../../firebase/index";

const Google = () => {
    const user = useContext(UserContext);
    const GOOGLE_API_KEY = "AIzaSyDD1bL9fKZ3r1YsNSBNd7kWwVyW3F4FkV4";
    const ulaanbaatar = { lat: 47.9190857, lng: 106.9162188 };

    const mapElementRef = useRef();
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const trackingRef = useRef();

    // console.log(markers)
    useEffect(() => {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      googleMapScript.async = true;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener("load", onGoogleMapLoad); //init map
      trackMyLocation();
    }, []);

    const onGoogleMapLoad = () => {
      mapRef.current = new window.google.maps.Map(mapElementRef.current, {
        center: ulaanbaatar,
        zoom: 12,
      });

      firestore.collection("tracking").onSnapshot((querySnapshot) => {
        const markerList = [];
        querySnapshot.forEach((doc) => {
          markerList.push(doc.data());
        });
        setMarkers(markerList);
      });
    };

    useEffect(() => {
      const markerslist=[];
      if (mapRef.current) {
        markers.forEach(
          (item) =>
         {  let m = new window.google.maps.Marker({
              position: { lat: item.position.lat, lng: item.position.lng },
              map: mapRef.current,
              label: item.username,
              title: "hello! "+ item.username 
            })
            markerslist.push(m)}
        );
      }

      return ()=>{
        markerslist.forEach((item)=>{
          item.setMap(null)
        })
      }
    }, [markers]);


  //   useEffect(() => {
  //     const beforeUnloadListener = (event) => {
  //       firestore.collection("tracking")
  //       .doc(user.uid).delete();
  //     }

  //     window.addEventListener("beforeunload", beforeUnloadListener, {capture: true});

  //     return () => {
  //         window.removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
  //     }
  // }, [])

    const sendMyLocation = (position) => {
      const { latitude, longitude } = position.coords;

      firestore
        .collection("tracking")
        .doc(user.uid)
        .set({
          position: { lat: latitude, lng: longitude },
          timeStamp: new Date(),
          username: user.username,
        });
    };

    const trackMyLocation = async () => {
      trackingRef.current = navigator.geolocation.watchPosition(
        sendMyLocation,
        console.error,
        { maximumAge: 30000 }
      );
    };

    return <div ref={mapElementRef} className="home-container "></div>;
};

export default Google;
