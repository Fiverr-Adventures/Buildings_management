import ObjectInfo from '../../components/objectInfo';

const ListInfo = (props) => {
    return ( 
        <div className="group-info">
            <ObjectInfo label="Name" info={props.object.name} className="obj"/>
            <ObjectInfo label="Building" info={props.object.building} className="obj" />
            <ObjectInfo label="Floor" info={props.object.floor} className="obj" />
            <ObjectInfo label="Type" info={props.object.type} className="obj" />
        </div>
     );
}
 
export default ListInfo;