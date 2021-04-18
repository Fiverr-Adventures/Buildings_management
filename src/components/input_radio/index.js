
const InputRadio = (props) => {
  
    return (
        <div className= {`group-radio ${props.className}`}>
            <input  type="radio" value={props.type} className="radio"
                    checked={props.selectedType === props.type}
                    onChange={props.change}
            />
             <span className="radio-look"></span>
            <label>{props.type}</label>
        </div>
      );
}
 
export default InputRadio;