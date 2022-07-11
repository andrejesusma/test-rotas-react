import { useState } from "react";
import { Box } from "../components/Box";
import '../style/global.css'

export function Home(){
    const [contentbox, setContentbox] = useState([
        'Home'
    ])
    function addNewBox(){
        setContentbox([...contentbox,'Home'])
    }
    return(
        <div>    
      {contentbox.map(box => {
        return <Box text={box}/>
      })}
      <button 
      onClick={addNewBox}
      style={{
        color: '#fff',
        background: '#8257ef',
        border: '0',
        padding: '6px 12px'
      }}
      >
        Add new Box
      </button>
        </div>
    );
}