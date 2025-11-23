

export default async function LocationFinderServer() {

    // Example: Fetch location data from an API
    const response = await fetch('https://apip.cc/json')
    const data = await response.json();
    const locationInfo = data;

    return (
        <>
            <h1>Location Finder - Server Component</h1>
            <h2>{locationInfo.City}</h2>
        </>
    )
}