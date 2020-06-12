import React from 'react'

export default function Counter(prop){
    return(
        <div  className={`headingnite ${prop.colorchanger ? "headingday" : ''}`}>
       
        <h1>Counter</h1>
        <h3>Click to start count</h3>
        <h2>{prop.count}</h2>
       
        </div>
    )
}