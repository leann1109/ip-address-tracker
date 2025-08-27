import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerUrl from "./assets/icon-location.svg";
import { InfoContainer } from "./components/InfoContainer/InfoContainer";
import "./App.css";

function App() {
	const MarkerIcon = L.icon({
		iconUrl: markerUrl,
	});
	L.Marker.prototype.options.icon = MarkerIcon;

	return (
		<>
			<div className="top-section">
				<h1>IP Address Tracker</h1>
				<InfoContainer />
			</div>

			<div className="map-section">
				<MapContainer
					id="map"
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={true}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]} icon={MarkerIcon}></Marker>
				</MapContainer>
			</div>
		</>
	);
}

export default App;
