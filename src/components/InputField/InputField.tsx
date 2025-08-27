import { useState, useEffect } from "react";
import iconArrow from "../../assets/icon-arrow.svg";
import "./InputField.css";

type InputFieldProps = {
	onSubmit: (value: string) => void;
};

export const InputField = ({ onSubmit }: InputFieldProps) => {
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState(false);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const validateInput = (value) => {
		// Regular expression for IPv4 validation
		// It matches four octets (0-255) separated by dots.
		// Each octet allows for numbers 0-99, 100-199, 200-249, and 250-255.
		const ipv4Regex =
			/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

		return ipv4Regex.test(value);
	};

	const handleSubmit = () => {
		if (validateInput(inputValue) && inputValue.length > 0) {
			setIsError(false);
			onSubmit(inputValue);
		} else {
			setIsError(true);
		}
	};

	useEffect(() => {
		if (inputValue.length === 0) {
			setIsError(false);
		}
	}, [inputValue]);

	return (
		<>
			<div className="input-container">
				<input
					type="text"
					placeholder="Search for any IP address or domain"
					value={inputValue}
					onChange={handleChange}
					className="input-field"
				/>
				<button className="submit-button" onClick={handleSubmit}>
					<img src={iconArrow} alt="arrow icon" />
				</button>
			</div>
			{isError && (
				<p className="error-message">Please enter a valid IP address.</p>
			)}
		</>
	);
};
