'use client';

import { useEffect, useState } from "react"
import { Spinner } from "./Spinner";
import Forcast from "./Forcast";

export default function LocationFinderClient() {
  const [loading, setLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState({city : "", state : "", lat: "", long: ""});

  const fetchLocationData = async () => {
    const response = await fetch('https://apip.cc/json');
    const data = await response.json();

    const city = JSON.parse(JSON.stringify(data.City));
    const state = JSON.parse(JSON.stringify(data.RegionName));
    const lat = JSON.parse(JSON.stringify(data.Latitude));
    const long = JSON.parse(JSON.stringify(data.Longitude));
    setLocationInfo({ city, state, lat, long });

    setLoading(false);
  };

  useEffect(() => {
    // Example: Fetch location data from an API
    fetchLocationData();

  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1rem', border: '1px solid gray', borderRadius: '1rem', backgroundColor: '#814bbf', color: '#faf9f7', boxShadow: '1px 1px 20px fuchsia', borderColor: 'purple' }}>
      <h2 style={{margin: 0, fontWeight: '500'}}>Client Component</h2>
      <h3 style={{marginTop: '1rem', marginBottom: 0, fontWeight: '500'}}>Location:</h3>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <li style={{margin: '0 1rem 1rem 1rem', listStyleType: 'none', color: 'black', backgroundColor: 'lightcoral'}}>{locationInfo.city}, {locationInfo.state}</li>
          <Forcast lat={locationInfo.lat} long={locationInfo.long} />
        </>
      )}
    </div>
  )
}