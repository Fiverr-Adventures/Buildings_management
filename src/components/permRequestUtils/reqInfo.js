const ReqInfo = (props) => {
    return ( 
        <div className="req-info">
            <div>
                <p className="x-small">{props.key1}</p>
                <label>{props.value1}</label>
            </div>
            <div>
                <p className="x-small">{props.key2}</p>
                <label>{props.value2}</label>
            </div>
            <div>
                <p className="x-small">{props.key3}</p>
                <label>{props.value3}</label>
            </div>
        </div>
     );
}
 
export default ReqInfo;