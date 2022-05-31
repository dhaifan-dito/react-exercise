import React, { useState } from 'react'
import PropsComp from './PropsComp';

function StateComp() {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
        console.log(show);
    }

    const testVar = "hide this text";

  return (
    <div style={{textAlign: "center"}}>
    <h1>StateComp</h1>

    <button onClick={handleOnClick}>
        show
    </button>

    {
    show && (
    <PropsComp testVar={testVar} /> 
    )
    }
    
    </div>
  )
}

export default StateComp