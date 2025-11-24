'use client';

import { useEffect, useState } from "react"
import { Spinner } from "./Spinner";

export default function LocationFinderClient({ lat, long }: { lat: string; long: string }) {
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState({Temperature: "", CloudCover: "", WindDirection: "", WindSpeed: ""});

  const fetchLocationData = async () => {
    let lat = "34.05"; // Default to Los Angeles
    let long = "-118.25";
    const response = await fetch(`https://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=astro&output=json`);
    const data = await response.json();

    console.log(data);

    const temp = JSON.parse(JSON.stringify(data.dataseries[0].temp2m));
    const cloud = JSON.parse(JSON.stringify(data.dataseries[0].cloudcover));
    const windDir = JSON.parse(JSON.stringify(data.dataseries[0].wind10m.direction));
    const windSpeed = JSON.parse(JSON.stringify(data.dataseries[0].wind10m.speed));
    setWeatherInfo({ Temperature: temp, CloudCover: cloud, WindDirection: windDir, WindSpeed: windSpeed});

    setLoading(false);
  };

  useEffect(() => {
    // Example: Fetch location data from an API
    fetchLocationData();

  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>
      <h3 style={{margin: 0, fontWeight: '500'}}>Weather Forecast:</h3>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <ul style={{margin: 'auto', backgroundColor: 'purple', color: 'black'}}>
            <li style={{ backgroundColor: 'lightcoral'}}>Temperature: {weatherInfo.Temperature}</li>
            <li style={{ backgroundColor: 'lightcoral'}}>Cloud Cover: {weatherInfo.CloudCover}</li>
            <li style={{ backgroundColor: 'lightcoral'}}>Wind Direction: {weatherInfo.WindDirection}</li>
            <li style={{ backgroundColor: 'lightcoral'}}>Wind Speed: {weatherInfo.WindSpeed}</li>
        </ul>
      )}
    </div>
  )
}