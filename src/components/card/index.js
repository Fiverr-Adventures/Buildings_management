import ObjectCard from "./objectCard";
import SearchBar from "../searchBar";

export default function CustomCard(props){
    let index = 0;

    const sendParam = (object)=> {
        props.getParam(object);

    }
    return (
        <div className="customCard">
            <SearchBar />
            <div className='object-list'>
                {props.objects.map(object => {
                    return (
                        <ObjectCard  name={object.name} desc={object.desc} type={props.type}
                                    vpnKey={object.vpnKey}  door={object.door} activity={object.activity}
                                    adminPanel={object.adminPanel} key={index++} onClick={ ()=> sendParam(object) }
                        >
                        </ObjectCard>)
                })}
            </div>
        </div>
    )
}