import { useState } from "react";
import Form2 from "./Form2";

export default function Form()  {
	const [selectedOption, setSelectedOption] = useState("");

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};
    console.log(typeof(selectedOption))
return  (
	<div>
		<label>
			Select your primitive data type:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="Cube">Cube</option>
				<option  value="Cuboid">Cuboid</option>
				<option  value="Sphere">Sphere</option>
			</select>
		</label>
		<p>Selected option: {selectedOption}</p>
        
        <Form2 PrimitiveShape={selectedOption} />
	</div>
	);

    
}