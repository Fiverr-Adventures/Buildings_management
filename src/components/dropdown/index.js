
const DropDown = (props) => {
    return (
        <div className="dropdown-p">
            <label>{props.label}</label>
            <select id="people" className={`b-text-s ${props.className}`} 
                    value={props.option}
                    onChange={props.handleChange}
                    >
                <option className="b-text-s" >{props.opt1}</option>
                <option className="b-text-s" >{props.opt2}</option>
            </select>
        </div>
      );
}
                   
export default DropDown;