
const DropDown = (props) => {
    return (
        <div className="dropdown-p">
            <label>Add By</label>
            <select id="people" className={`b-text-s ${props.className}`} 
                    value={props.option}
                    onChange={props.handleChange}
                    >
                <option className="b-text-s" >Single User</option>
                <option className="b-text-s" >Import CSV</option>
            </select>
        </div>
      );
}
                   
export default DropDown;