import AdminPanel from '../../assets/icons/svg/admin_panel.svg';
import Lottie from "react-lottie";

export default function ObjectCard(props){
    
    function LottieAnimation({ lotti }) {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lotti,
        width:30,
        height: 30,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      return (
        <Lottie 
            options={defaultOptions}
            height={50}
            width={50}
        />
      )
    }

    function Properties() {
        if (props.type === "people")
            return (
                <div className="people">
                    <div className="elem">
                        <span className="medium">{props.vpnKey}</span>
                        <svg className ="svgKey" id="vpn_key-24px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path id="Tracé_29" data-name="Tracé 29" d="M0,0H36V36H0Z" transform="translate(0)" fill="none"/>
                            <path id="Tracé_30" data-name="Tracé 30" d="M33,26H24V20H19.98a10.5,10.5,0,1,1,0-9H36v9H33Zm-6-3h3V17h3V14H17.91L17.565,13a7.5,7.5,0,1,0,0,5.01L17.91,17H27ZM10.5,20A4.5,4.5,0,1,1,15,15.5,4.513,4.513,0,0,1,10.5,20Zm0-6A1.5,1.5,0,1,0,12,15.5,1.5,1.5,0,0,0,10.5,14Z" transform="translate(0 2.5)" fill="#3a3b3c"/>
                        </svg>
                    </div>
                    <div className="elem">
                        <span className="medium">{props.door}</span>
                        <svg className ="svgKey" id="meeting_room-24px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path id="Tracé_23" data-name="Tracé 23" d="M0,0H36V36H0Z" fill="rgba(0,0,0,0)"/>
                            <path id="Tracé_24" data-name="Tracé 24" d="M27,27V4.5H21V3H6V27H3v3H21V7.5h3V30h6V27Zm-9,0H9V6h9ZM13.5,15h3v3h-3Z" transform="translate(1.5 1.5)" fill="#3a3b3c"/>
                        </svg>
                    </div>
                </div>
            )
        else if (props.type === "groups")
            return (
                <div className="people people_g">
                    <div className="adminPanel elem ">
                        <p className="medium">{props.adminPanel}</p>
                        {props.adminPanel ? <img src={AdminPanel} alt="admin"/> : <></> }
                    </div>
                    <div className="elem">
                        <span className="medium">{props.door}</span>
                        <svg className ="svgKey" id="meeting_room-24px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path id="Tracé_23" data-name="Tracé 23" d="M0,0H36V36H0Z" fill="rgba(0,0,0,0)"/>
                            <path id="Tracé_24" data-name="Tracé 24" d="M27,27V4.5H21V3H6V27H3v3H21V7.5h3V30h6V27Zm-9,0H9V6h9ZM13.5,15h3v3h-3Z" transform="translate(1.5 1.5)" fill="#3a3b3c"/>
                        </svg>
                    </div>
                </div>
            )
        else if (props.type === "doors")
            return (
                <LottieAnimation lotti={props.activity}  />
            )
        else if (props.type === "buildings")
            return (
                <div className="elem">
                    <span className="medium">{props.door}</span>
                    <svg className ="svgKey" id="meeting_room-24px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <path id="Tracé_23" data-name="Tracé 23" d="M0,0H36V36H0Z" fill="rgba(0,0,0,0)"/>
                        <path id="Tracé_24" data-name="Tracé 24" d="M27,27V4.5H21V3H6V27H3v3H21V7.5h3V30h6V27Zm-9,0H9V6h9ZM13.5,15h3v3h-3Z" transform="translate(1.5 1.5)" fill="#3a3b3c"/>
                    </svg>
                </div>
            )
        else {
            return <></>
        }
    }
    return (
        <div className="objectCard" onClick={props.onClick}>
            <div className="objectInfo">
                <p className="label">{props.name}</p>
                <small>{props.desc}</small>
            </div>
            <div className="properties">
                <Properties type={props.type}></Properties>   
            </div>
        </div>
        )
    
}