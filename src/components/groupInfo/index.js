import ObjectInfo from '../../components/objectInfo';

const ListInfo = (props) => {
    return ( 
        <div className="group-info">
            <ObjectInfo label="Name" info={props.object.name} className="obj"/>
            <ObjectInfo label="Building" info={props.object.building} className="obj" />
            <ObjectInfo label="Manager" info={props.object.manager} className="obj" />
            <ObjectInfo label="Schedule" info={props.object.schedule} className="obj" />
        </div>
     );
}
 
export default ListInfo;