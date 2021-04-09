import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
let arr = [true,false,false,false,false];

export default function SideBar(props) {
   
    const [selected, setselected] = useState(arr);
    const [height, setHeight] = useState(window.innerHeight);

    function clickHandle(itemIndex) {
        let array = [];
        for (let index= 0; index < selected.length; index++) {
            if(index !== itemIndex){
                array.push(false)
            }
            else{
                array.push(true)
            }
        }
        setselected(array);
        arr = array;
    }

    const handleOnClick = (index) => {
        clickHandle(index);

    }

    const updateHeight = () => {
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    });

    return (
            <div className="sideBar" style={{height: height}}>
                <div style={{height: "100%"}}>
                    <Link to="/home" onClick={ () => handleOnClick(0) } >
                    <div className="linkWrapper">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="121" height="43" viewBox="0 0 121 43" className={`svgSide ${selected[0] ? "active" : ""}`}>
                            <g id="Composant_3_5" data-name="Composant 3 – 5" transform="translate(1 5)">
                                <g id="home" transform="translate(0 4)">
                                <path id="Tracé_14" data-name="Tracé 14" d="M3,12.5,16.5,2,30,12.5V29a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3Z" transform="translate(-3 -2)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path id="Tracé_15" data-name="Tracé 15" d="M9,27V12h9V27" transform="translate(0 3)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                </g>
                                <text id="Home-2" data-name="Home" transform="translate(77 30)" fill="#178fed" fontSize="32" fontFamily="SegoeUI, Segoe UI" opacity="0"><tspan x="-42.883" y="0">Home</tspan></text>
                            </g>
                        </svg>
                        <p className="linkDesc ">Home</p>
                        </div>
                    </Link>
                    <Link to="/people" onClick={ () => handleOnClick(1) } >
                       <div className="linkWrapper">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="135" height="43" viewBox="0 0 135 43" className={ `svgSide ${selected[1] ? "active" : ""}`}>
                            <g id="Composant_4_5" data-name="Composant 4 – 5" transform="translate(1 5)">
                                <g id="users" transform="translate(-1 4)">
                                <path id="Tracé_16" data-name="Tracé 16" d="M22.818,23.182V20.455A5.455,5.455,0,0,0,17.364,15H6.455A5.455,5.455,0,0,0,1,20.455v2.727" transform="translate(0 4.364)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <circle id="Ellipse_13" data-name="Ellipse 13" cx="5.455" cy="5.455" r="5.455" transform="translate(6.455 3)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path id="Tracé_17" data-name="Tracé 17" d="M24.091,23.135V20.407A5.455,5.455,0,0,0,20,15.13" transform="translate(6.909 4.411)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path id="Tracé_18" data-name="Tracé 18" d="M16,3.13A5.455,5.455,0,0,1,16,13.7" transform="translate(5.455 0.047)" fill="none" stroke="#3a3b3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                </g>
                                <text id="People" transform="translate(86 30)" fill="#178fed" fontSize="32" fontFamily="SegoeUI, Segoe UI" opacity="0"><tspan x="-47.758" y="0">People</tspan></text>
                            </g>
                        </svg>
                        <p className="linkDesc ">People</p>
                        </div>
                    </Link>
                    <Link to="/groups" onClick={ () => handleOnClick(2) } >
                        <div className="linkWrapper">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="147" height="43" viewBox="0 0 147 43" className={`svgSide ${selected[2] ? "active" : ""}`}>
                                <g id="Composant_5_3" data-name="Composant 5 – 3" transform="translate(0 5)">
                                    <g id="group_work-24px" transform="translate(0 1)">
                                    <path id="Tracé_36" data-name="Tracé 36" d="M0,0H36V36H0Z" fill="none"/>
                                    <path id="Tracé_37" data-name="Tracé 37" d="M17,2A15,15,0,1,0,32,17,15.005,15.005,0,0,0,17,2Zm0,27A12,12,0,1,1,29,17,12.016,12.016,0,0,1,17,29Z" transform="translate(1 1)" fill="#3a3b3c"/>
                                    <circle id="Ellipse_29" data-name="Ellipse 29" cx="3" cy="3" r="3" transform="translate(9 18)" fill="#3a3b3c"/>
                                    <circle id="Ellipse_30" data-name="Ellipse 30" cx="3" cy="3" r="3" transform="translate(15 9)" fill="#3a3b3c"/>
                                    <circle id="Ellipse_31" data-name="Ellipse 31" cx="3" cy="3" r="3" transform="translate(21 18)" fill="#3a3b3c"/>
                                    </g>
                                    <text id="Groups" transform="translate(44 30)" fill="#178fed" fontSize="32" fontFamily="SegoeUI, Segoe UI" opacity="0"><tspan x="0" y="0">Groups</tspan></text>
                                </g>
                            </svg>
                            <p className="linkDesc ">Groups</p>
                        </div>
                    </Link>
                    <Link to="/doors" onClick={ () => handleOnClick(3) } >
                        <div className="linkWrapper">
                            <svg  id="meeting_room-24px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" className={`svgSide ${selected[3] ? "active" : ""}`}>
                                <path id="Tracé_23" data-name="Tracé 23" d="M0,0H36V36H0Z" fill="rgba(0,0,0,0)"/>
                                <path id="Tracé_24" data-name="Tracé 24" d="M27,27V4.5H21V3H6V27H3v3H21V7.5h3V30h6V27Zm-9,0H9V6h9ZM13.5,15h3v3h-3Z" transform="translate(1.5 1.5)" fill="#3a3b3c"/>
                            </svg>
                            <p className="linkDesc ">Doors</p>
                        </div>
                    </Link>
                    <Link to="/buildings" onClick={ () => handleOnClick(4) } >
                    <div className="linkWrapper">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="172" height="43" viewBox="0 0 172 43" className={`svgSide ${selected[4] ? "active" : ""}`}>
                            <g id="Composant_7_5" data-name="Composant 7 – 5" transform="translate(0 5)">
                                <g id="apartment-24px" transform="translate(0 2)">
                                <g id="Groupe_23" data-name="Groupe 23">
                                    <rect id="Rectangle_66" data-name="Rectangle 66" width="36" height="36" fill="none"/>
                                    <rect id="Rectangle_67" data-name="Rectangle 67" width="36" height="36" fill="none"/>
                                </g>
                                <g id="Groupe_24" data-name="Groupe 24" transform="translate(4.5 4.5)">
                                    <path id="Tracé_33" data-name="Tracé 33" d="M24,15V6a3.009,3.009,0,0,0-3-3H12A3.009,3.009,0,0,0,9,6V9H6a3.009,3.009,0,0,0-3,3V27a3.009,3.009,0,0,0,3,3h7.5A1.5,1.5,0,0,0,15,28.5V24h3v4.5A1.5,1.5,0,0,0,19.5,30H27a3.009,3.009,0,0,0,3-3V18a3.009,3.009,0,0,0-3-3ZM9,27H6V24H9Zm0-6H6V18H9Zm0-6H6V12H9Zm6,6H12V18h3Zm0-6H12V12h3Zm0-6H12V6h3Zm6,12H18V18h3Zm0-6H18V12h3Zm0-6H18V6h3Zm6,18H24V24h3Zm0-6H24V18h3Z" transform="translate(-3 -3)" fill="#3a3b3c"/>
                                </g>
                                </g>
                                <text id="Buildings" transform="translate(42 30)" fill="#178fed" fontSize="32" fontFamily="SegoeUI, Segoe UI" opacity="0"><tspan x="0" y="0">Buildings</tspan></text>
                            </g>
                        </svg>
                        <p className="linkDesc ">Buildings</p>
                    </div>
                    </Link>
                </div>
                {props.children}
            </div>  
    )
   
}