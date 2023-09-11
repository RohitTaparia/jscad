import { useState } from "react";

export default function FormSphere(PrimitiveShape) {
  const [formData, setFormData] = useState({radius: 3, x_coordinate: 0, y_coordinate: 0, z_coordinate: 0});
  const shape=(PrimitiveShape=="Sphere"?1:0)
  const handleChange = (event) => {
    const { height, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [height]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`radius: ${formData.radius} x-coordinate: ${formData.x_coordinate}, 
    y-coordinate: ${formData.x_coordinate},z-coordinate: ${formData.x_coordinate} `
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="radius">radius:</label>
      <input type="text" id="radius" value={formData.radius} onChange={handleChange}/>
      
      <label htmlFor="x-coordinate">x-coordinate:</label>
      <input type="text" id="x-coordinate" value={formData.x_coordinate} onChange={handleChange}/>
      
      <label htmlFor="y-coordinate">y-coordinate:</label>
      <input type="text" id="y-coordinate" value={formData.y_coordinate} onChange={handleChange}/>
      
      <label htmlFor="z-coordinate">z-coordinate:</label>
      <input type="text" id="z-coordinate" value={formData.z_coordinate} onChange={handleChange}/>
      
      <button type="submit">Submit</button>
    </form>
   
  );
}
