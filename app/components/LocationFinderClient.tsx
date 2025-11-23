'use client';

import { useEffect, useState } from "react"

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState<string>("");

    const fetchLocationData = async () => {
        // Example: Fetch location data from an API
        const response = await fetch('https://apip.cc/json')
        const data = await response.json();
        const city = JSON.parse(JSON.stringify(data.City));
        setLocationInfo(city);
    }

    useEffect(() => {
        // Example: Fetch location data from an API
        fetchLocationData();
    }, [ ]);

    return (
        <>
            <h1>Location Finder - Client Component</h1>
            <h2>{locationInfo}</h2>
        </>
    )
}