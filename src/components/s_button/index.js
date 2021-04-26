import React from 'react'

export default function MyButton(props) {
    return (
        <div className={`${props.className1}`} >
            <button className={`s-button b-text-s ${props.className2}`}
                     onClick={props.onClick} type="button">
                {props.children}
            </button>  
        </div>
        
    )
}
