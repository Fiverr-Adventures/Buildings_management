// import {  } from "../../assets/icons/svg/door";
export default function ObjectCard(props){

    function Properties() {
        if (props.type === "people")
            return (
                <div>
                    <div>
                        <span className="medium">{props.key}</span>
                        <img src={props.keyImg} /> 
                    </div>
                    <div>
                        <span className="medium">{props.door}</span>
                        <img src={props.doorImg}  /> 
                    </div>
                </div>
            )
        else if (props.type === "groups")
            return (
                <div>
                    <div>
                        <p className="medium">{props.includes}</p>
                        <img src={props.includesImg}  />
                    </div>
                    <div>
                        <span className="medium">{props.door}</span>
                        <img src={props.doorImg}  /> 
                    </div>
                </div>
            )
        else if (props.type === "doors")
            return (
                <img src={props.activity}  />
            )
        else if (props.type === "buildings")
            return (
                <div className="building">
                    <span className="medium">{props.door}</span>
                    <img src={props.doorImg} alt={props.doorImg} /> 
                </div>
            )
        else {
            return <></>
        }
    }
    return (
        <div className="objectCard">
            <div className="objectInfo">
                <label>{props.name}</label>
                <small>{props.desc}</small>
            </div>
            <Properties type={props.type}></Properties>  
            
        </div>
        )
    
}