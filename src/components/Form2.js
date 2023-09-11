import { useState } from "react";
import Cube from "./Cube.js"

export default function FormCube({PrimitiveShape}) {
  const [formData, setFormData] = useState({height:3,width: 3,radius: 3, depth:12, x_coordinate: 0, y_coordinate: 0, z_coordinate: 0});
  const [isSubmitted, setisSubmistted]=useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(Number(value))
    console.log(isSubmitted)
    setFormData((prevFormData) => ({ ...prevFormData, [name]: Number(value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setisSubmistted({isSubmitted: true})
    alert(`height: ${formData.height}, width: ${formData.width}, radius: ${formData.radius}, depth: ${formData.depth}, x-coordinate: ${formData.x_coordinate}, 
    y-coordinate: ${formData.y_coordinate},z-coordinate: ${formData.z_coordinate} `
    );
    
};
  //console.log(PrimitiveShape)
  //console.log(PrimitiveShape==='Sphere')
  //console.log(typeof(PrimitiveShape))
  if(PrimitiveShape!='Sphere'){
  return (
    <div>
      <div id="Form">
    <form onSubmit={handleSubmit}>
        <label htmlFor="height">height:</label>
        <input type="text" id="height" name="height"  value={formData.height} onChange={handleChange}/>

        <label htmlFor="width">width:</label>
        <input type="text" id="width" name="width" value={formData.width} onChange={handleChange}/>
      
        <label htmlFor="depth">depth:</label>
        <input type="text" id="depth" name="depth" value={formData.depth} onChange={handleChange}/>

      <label htmlFor="x-coordinate">x-coordinate:</label>
      <input type="text" id="x-coordinate" name="x_coordinate" value={formData.x_coordinate} onChange={handleChange}/>
      
      <label htmlFor="y-coordinate">y-coordinate:</label>
      <input type="text" id="y-coordinate" name="y_ccoordinate" value={formData.y_coordinate} onChange={handleChange}/>
      
      <label htmlFor="z-coordinate">z-coordinate:</label>
      <input type="text" id="z-coordinate" name="z_coordinate" value={formData.z_coordinate} onChange={handleChange}/>
      
      <button type="submit">Submit</button>
    </form>
    </div>
    {isSubmitted && <Cube height={FormData.height} width={FormData.width} depth={FormData.depth} x_coordinate={FormData.x_coordinate}
                y_coordinate={FormData.y_coordinate} z_coordinate={FormData.z_coordinate} />}
    </div>
  );
  }
  else{
    return(
      <div>
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
    {isSubmitted && <Cube height={FormData.height} width={FormData.width} depth={FormData.depth} x_coordinate={FormData.x_coordinate}
    y_coordinate={FormData.y_coordinate} z_coordinate={FormData.z_coordinate} />}
    </div>
    );
  }
}
