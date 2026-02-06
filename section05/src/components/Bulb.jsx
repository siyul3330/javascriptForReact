import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState('ON');
  const onLightClick = (e)=>{setLight(light === 'ON' ? 'OFF' : 'ON')}

  console.log(light);
  return <>
  <div>
    {light === 'ON' ? (
      <h1 style={{backgroundColor: 'green'}}>Bubl ON</h1>
    ) : (
      <h1 style={{backgroundColor: 'red'}}>Bubl OFF</h1>
    )}
    <button type="button" onClick={onLightClick}>
    {light === 'ON' ? 'OFF' : 'ON'} </button>
  </div>
  </>
}
export default Bulb;