import { Container } from "react-bootstrap";
import ObjectCard from "./objectCard";
// import Key from "../../assets/icons/svg/key.svg";
// import Door from "../../assets/icons/svg/door.svg";
// import Includes from "../../assets/icons/svg/includes.svg";
export default function CustomCard(props){
    return (
        <div className="customCard">
            <input type="text" placeholder="Search" />
            <div className='object-list'>
                {props.objects.map(object => {
                    return (
                        <ObjectCard  name={object.name} desc={object.desc} type={props.type}
                                    vpnKey={object.vpnKey}  door={object.door} 
                        >
                        </ObjectCard>)
                })}
            </div>
        </div>
    )
}