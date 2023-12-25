import React from 'react'

const Display = (props) => {




  return (
    <div style={{display:"flex",flexWrap: 'wrap'}}>
      {props.colors.map((c , idx)=>
        <div key={idx} style={{ backgroundColor:c,  width: '200PX', height: '200px' }}></div>
      )}
    </div>
  )
}

export default Display
