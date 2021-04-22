import ObjectInfo from '../../components/objectInfo';

const ListInfo = (props) => {
    return ( 
        <div className="group-info">
            <ObjectInfo label="Name" info={props.object.name} className="obj"/>
            <ObjectInfo label="Dept" info={props.object.dept} className="obj" />
            <ObjectInfo label="Floors" info={props.object.floors} className="obj" />
            <ObjectInfo label="Type" info={props.object.type} className="obj" />
        </div>
     );
}
 
export default ListInfo;