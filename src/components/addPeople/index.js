import {useState} from 'react';
import MyModal from "../../components/modal";
import Input from "../../components/input";
import MyButton from '../../components/s_button';
import InputRadio from '../../components/input_radio';
import DropDown from '../../components/dropdown';
import AddMany from '../../components/forPeople/addMany';
import Student from '../../components/forPeople/student';
import BuildingManager from '../../components/forPeople/buildingManager';
import ExecutiveManager from '../../components/forPeople/executiveManager';

export default function AddPeople(props) {
    const [add, setAdd] = useState(false);
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }
    const [selectedType, setSelectedType] = useState("Student");
    const [selectedOption, setSelectedOption] = useState("Single User");
    const onValueChange= (event) => {
        setSelectedType(event.target.value)
    }
    const handleChange= (event) => {
        setSelectedOption(event.target.value);
    }
    let typePeople;
    if (selectedType === "Executive Manager") 
        typePeople = <ExecutiveManager />
    else if (selectedType === "Building Manager")
        typePeople = <BuildingManager />
    else
        typePeople = <Student />

    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd}>
            <div className="modal-g">
                <h3 >Add People</h3> 
                <div className="desc">
                    <form className="form">
                        <DropDown className="c-dropdown" label="Add By" option={selectedOption}
                            handleChange={handleChange} opt1="Single User" opt2="Import CSV"/>
                    { selectedOption === "Single User" ?
                        <div className="content">
                            <div className="input-details">   
                                <div className="inputs">
                                    <div className="name">
                                        <div className="group-input">
                                            <label>First</label>
                                            <Input className="input-g"/>  
                                        </div>
                                        <div className="group-input">
                                            <label>Last</label>
                                            <Input className="input-g"/>  
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Email</label>
                                        <Input className="input-g"/>  
                                    </div>  
                                    <div className="group-input">
                                        <label>Key</label>
                                        <Input className="input-g"/>  
                                    </div>  
                                </div>
                                <div className="type-p">
                                    <label className="type">Type</label>
                                    <InputRadio type="Student" selectedType={selectedType} 
                                        change={onValueChange} className="in-radio"/>
                                    <InputRadio type="Faculty" selectedType={selectedType}
                                        change={onValueChange} className="in-radio" />
                                    <InputRadio type="Staff" selectedType={selectedType}
                                        change={onValueChange} className="in-radio" />
                                    <InputRadio type="Building Manager" selectedType={selectedType}
                                        change={onValueChange} className="in-radio"/>
                                    <InputRadio type="Executive Manager" selectedType={selectedType}
                                        change={onValueChange} className="in-radio"/>
                                </div>
                            </div>
                        {typePeople}
                        </div> : <AddMany />}
                    { selectedOption === "Single User" ? <MyButton className1="g-container" className2="small-b">Save</MyButton> : null }
                    </form>
                </div>
            </div>
        </MyModal>
    );
}