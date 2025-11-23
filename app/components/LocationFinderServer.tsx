

export default async function LocationFinderServer() {

    // Example: Fetch location data from an API
    const response = await fetch('https://apip.cc/json')
    const data = await response.json();
    const city = JSON.parse(JSON.stringify(data.City));
    const state = JSON.parse(JSON.stringify(data.RegionName));

    return (
        <>
            <h1>Location Finder - Server Component</h1>
            <h2>{city}, {state}</h2>
        </>
    )
}