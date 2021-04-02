import ObjectCard from "./objectCard";
import SearchBar from "../searchBar"
export default function CustomCard(props){
    return (
        <div className="customCard">
            <SearchBar />
            <div className='object-list'>
                {props.objects.map(object => {
                    return (
                        <ObjectCard  name={object.name} desc={object.desc} type={props.type}
                                    vpnKey={object.vpnKey}  door={object.door} activity={object.activity}
                                    adminPanel={object.adminPanel}
                        >
                        </ObjectCard>)
                })}
            </div>
        </div>
    )
}