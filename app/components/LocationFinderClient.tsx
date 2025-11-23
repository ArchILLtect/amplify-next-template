'use client';

import { useEffect, useState } from "react"

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({city : "", state : ""});

    const fetchLocationData = async () => {
        // Example: Fetch location data from an API
        const response = await fetch('https://apip.cc/json')
        const data = await response.json();
        const city = JSON.parse(JSON.stringify(data.City));
        const state = JSON.parse(JSON.stringify(data.RegionName));
        setLocationInfo({city: city, state: state});
    }

    useEffect(() => {
        // Example: Fetch location data from an API
        fetchLocationData();
    }, [ ]);

    return (
        <>
            <h1>Location Finder - Client Component</h1>
            <h2>{locationInfo.city}, {locationInfo.state}</h2>
        </>
    )
}