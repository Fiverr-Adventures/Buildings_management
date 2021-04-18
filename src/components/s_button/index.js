import React from 'react'

export default function MyButton(props) {
    return (
        <div style={{display: "flex", justifyContent: "center"}} >
            <button className={`s-button b-text-s ${props.className}`} type={props.type}>
                {props.children}
            </button>  
        </div>
        
    )
}
