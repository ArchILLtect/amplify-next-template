import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";

export default function App() {

  return (
    <main style={{width: '90%'}}>
      <div style={{ border: '1px solid black', borderRadius: '1rem', paddingTop: '1rem', paddingBottom: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{fontWeight: '500', marginTop: 0, marginBottom: '1rem'}}>Location Information</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <LocationFinderClient />
          <LocationFinderServer />
        </div>
      </div>
      <div style={{ padding: '1rem', width: '80%', margin: '0 auto' }}>
        <h1 style={{fontWeight: '500', marginTop: 0, marginBottom: '1rem'}}>ArchILLtect's todos</h1>
        <ToDo />
      </div>
    </main>
  );
}
