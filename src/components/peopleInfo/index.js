import ObjectInfo from '../../components/objectInfo';

const ListInfo = (props) => {
    return ( 
        <div className="list-info">
            <div>
                <ObjectInfo label="First" info={props.object.first} className="obj"/>
                <ObjectInfo label="Last" info={props.object.last} className="obj" />
                <ObjectInfo label="Type" info={props.object.type} className="obj" />
                <ObjectInfo label="Email" info={props.object.email} className="obj" />
                <ObjectInfo label="Key" info={props.object.key} className="obj" />  
            </div>
            <div className="profil-img">
                <img src={props.object.img} />
                <button className="large">edit</button>  
            </div>
        </div>
     );
}
 
export default ListInfo;