import { useEffect, useState } from "react";

function InputField({type, name, label, pattern}) {
	var [errorMessage, setErrorMessage] = useState("");
	var [value, setValue] = useState("");
	
	useEffect(function() {
		if (!pattern.test(value)) {
			setErrorMessage("You must fill this field correctly.");
		} else {
			setErrorMessage("");
		}
	}, [value, setErrorMessage]);

	return (
		<div className="inputGroup">
			<label htmlFor={label}>{label}</label>
			<input
				value={value}
				type={type}
				id={label}
				name={name}
				onChange={e => setValue(e.target.value)}
			/>
			<span>{errorMessage}</span>
		</div>
	);
}
 
export default InputField;
