import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";

export default function App() {

  return (
    <main>
      <h1>ArchILLtect's todos</h1>
      <ToDo />
      <LocationFinderClient />
      <LocationFinderServer />
    </main>
  );
}
