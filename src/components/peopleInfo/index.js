import ObjectInfo from '../../components/objectInfo';

const ListInfo = (props) => {
    return ( 
        <div className="list-info">
            <div>
                <ObjectInfo label="First" info={props.object.first} 
                            className="obj" classNamep="p"/>
                <ObjectInfo label="Last" info={props.object.last} 
                            className="obj"  classNamep="p"/>
                <ObjectInfo label="Type" info={props.object.type} 
                            className="obj"  classNamep="p"/>
                <ObjectInfo label="Email" info={props.object.email} 
                            className="obj"  classNamep="p"/>
                <ObjectInfo label="Key" info={props.object.key} 
                            className="obj"  classNamep="p"/>  
            </div>
            <div className="profil-img">
                <img src={props.object.img} alt=""/>
                <button className="large">edit</button>  
            </div>
        </div>
     );
}
 
export default ListInfo;