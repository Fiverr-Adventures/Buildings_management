import mapboxgl from 'mapbox-gl';
import React, {useEffect} from 'react';

const DraggableMarker = () => {
    var myRef = React.createRef();
   
    useEffect(() => {
        var coordinates = myRef.current;
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG1haG5rZSIsImEiOiJja25oc3psc2cwbWd2MnZudzA1d2dpOW5wIn0.w7LO2v86HxcaZUPdkmFk7g';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/alexmahnke/cknht620v00d317ocx08bve1u',
            center: [-89.40864500185694, 43.071436442382236],
            zoom: 18
        });
    
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-89.40864500185694, 43.071436442382236])
            .addTo(map);
            function onDragEnd() {
                    var lngLat = marker.getLngLat();
                    coordinates.style.display = 'block';
                    coordinates.innerHTML =
                        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            }
            marker.on('dragend', onDragEnd);

        })
        
    return (
        <>
            <div id="map" style={{width:"249px",height:"363px"}}></div>
            {/* <img src={WendtFloor} alt="" id="map"/> */}
            <pre ref ={myRef} id="coordinates" className="coordinates" ></pre>
        </>
     );
}
 
export default DraggableMarker;