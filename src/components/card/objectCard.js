import Key from '../../assets/icons/svg/key.svg';
import Door from '../../assets/icons/svg/door.svg';
import AdminPanel from '../../assets/icons/svg/admin_panel.svg';

export default function ObjectCard(props){

    function Properties() {
        if (props.type === "people")
            return (
                <div className="people">
                    <div className="elem">
                        <span className="medium">{props.vpnKey}</span>
                        <img src={Key} /> 
                    </div>
                    <div className="elem">
                        <span className="medium">{props.door}</span>
                        <img src={Door} /> 
                    </div>
                </div>
            )
        else if (props.type === "groups")
            return (
                <div className="people">
                    <div className="adminPanel elem">
                        <p className="medium">{props.adminPanel}</p>
                        {props.adminPanel ? <img src={AdminPanel} /> : <></> }
                    </div>
                    <div className="elem">
                        <span className="medium">{props.door}</span>
                        <img src={Door}  /> 
                    </div>
                </div>
            )
        else if (props.type === "doors")
            return (
                <img src={props.activity}  />
            )
        else if (props.type === "buildings")
            return (
                <div className="elem">
                    <span className="medium">{props.door}</span>
                    <img src={Door} /> 
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
            <div className="properties">
                <Properties type={props.type}></Properties>   
            </div>
        </div>
        )
    
}