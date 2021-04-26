const PersonInfo = (props) => {
    return ( 
        <div className="person-info">
            <img src={props.object.img} alt=""/>
            <div>
                <h4>{props.object.first}</h4>
                <h4>{props.object.last}</h4>
                <h4>{props.object.type}</h4>
                <p className="b-text-b">{props.object.email}</p>
            </div>
        </div>
     );
}
 
export default PersonInfo;