import React from 'react'

export default function MyButton(props) {
    return (
        <div className={`${props.className1}`} >
            <button className={`s-button b-text-s ${props.className2}`} type={props.type}>
                {props.children}
            </button>  
        </div>
        
    )
}
