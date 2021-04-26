const ObjectInfo = (props) => {
    return ( 
        <div className={`info-container  ${props.className}`}>
            <div className="info">
                <p className={`large ${props.classNamep}`}>{props.label}</p>
                <h4>{props.info}</h4> 
            </div>
            <button className="large">edit</button>
        </div>
     );
}
 
export default ObjectInfo;