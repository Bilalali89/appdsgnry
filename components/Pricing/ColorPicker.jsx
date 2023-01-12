import React, {useState} from 'react';


const ColorPicker = () => {
    const [color,setColor]=useState('')
  return (
    <div>
         <div className="ColorpickerDiv form-group">
            <input type="color" onChange={(e)=>setColor(e.target.value)} value={color} />
            <input type="text" value={color} id="hex" onChange={(e)=>setColor(e.target.value)} />
        </div>
    </div>
  )
}

export default ColorPicker