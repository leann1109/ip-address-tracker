import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
	return (
		<>
			<div className="top-section">
				<h1>IP Address Tracker</h1>
			</div>

			<div className="map-section">
				<MapContainer
					id="map"
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}></Marker>
				</MapContainer>
			</div>
		</>
	);
}

export default App;
