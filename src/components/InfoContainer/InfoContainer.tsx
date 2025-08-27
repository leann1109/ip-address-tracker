import { useState } from "react";
import { InputField } from "../InputField/InputField";
import "./InfoContainer.css";

export const InfoContainer = () => {
	const [ipAddress, setIpAddress] = useState("");
	const [location, setLocation] = useState("Brooklyn, NY 10001");
	const [timezone, setTimezone] = useState("UTC -05:00");
	const [isp, setIsp] = useState("SpaceX Starlink");

	const handleIpSubmit = (value: string) => {
		setIpAddress(value);
	};

	return (
		<>
			<InputField onSubmit={handleIpSubmit} />

			<div className="info-container">
				<div className="info-card">
					<p className="info-title">IP Address</p>
					<p className="info-content">{ipAddress}</p>
				</div>

				<div className="info-card divider">
					<p className="info-title">Location</p>
					<p className="info-content">{location}</p>
				</div>

				<div className="info-card divider">
					<p className="info-title">Timezone</p>
					<p className="info-content">{timezone}</p>
				</div>

				<div className="info-card divider">
					<p className="info-title">ISP</p>
					<p className="info-content">{isp}</p>
				</div>
			</div>
		</>
	);
};
