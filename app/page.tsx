import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";

export default function App() {

  return (
    <main style={{width: '90%'}}>
      <div style={{ border: '1px solid black', borderRadius: '1rem', padding: '1rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Location Information</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <LocationFinderClient />
          <LocationFinderServer />
        </div>
      </div>
      <div>
        <h1>ArchILLtect's todos</h1>
        <ToDo />
      </div>
    </main>
  );
}
