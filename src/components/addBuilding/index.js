import  {useState } from "react";
import MyModal from "../../components/modal";
import Input from "../../components/input";
import MyButton from '../../components/s_button';
import InputRadio from '../../components/input_radio';
import DropDown from '../../components/dropdown';

export default function AddBuilding (props) {
    
    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }
    
    const [selectedType, setSelectedType] = useState("Library");
    const [selectedOption, setSelectedOption] = useState("");

    const onValueChange= (event) => {
        setSelectedType(event.target.value)
    }
    const handleChange= (event) => {
        setSelectedOption(event.target.value);
    }
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} >
            <div className="modal-g">
                <h3 >Add Buildings</h3>  
                <div className="desc">
                    <div className="form">
                        <div className="inputs">
                            <div className="group-input">
                                <label style={{color: "#b1b3b7"}}>Building Name</label>
                                <Input className="input-g"/>  
                            </div>  
                            <DropDown className="buil-dropdown" label="Department(s)" option={selectedOption}
                            handleChange={handleChange} opt1="Research and Development" opt2="Computer Science"/>
                        </div>
                        <label style={{color: "#b1b3b7"}} className="type">Type</label>
                        <div className="type-buil">
                            <div>
                                <InputRadio type="Residence Hall" selectedType={selectedType} 
                                change={onValueChange} className="in-radio"/>
                                <InputRadio type="Academic Hall" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio" />
                                <InputRadio type="Food Hall" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio" />  
                            </div>
                            <div>
                                <InputRadio type="Library" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>
                                <InputRadio type="Administration" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>
                                <InputRadio type="Lab" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>  
                            </div>
                            <div>
                                <InputRadio type="Gym" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>
                                <InputRadio type="Facilities" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>
                                <InputRadio type="Custom" selectedType={selectedType} 
                                    change={onValueChange} className="in-radio"/>  
                            </div>
                        </div>
                        <div className="upload-layout">
                            <div className="upload">
                                <label>Baselayer</label>
                                <MyButton className1= "b-container" className2="medium-b">Upload Layout</MyButton>
                            </div>
                            <div className="upload">
                                <label>Floor 1</label>
                                <MyButton className1= "b-container" className2="medium-b">Upload Layout</MyButton>
                            </div> 
                            <div className="add-buil">
                                <button className="b-text-s">+</button>
                            </div>
                        </div>
                        <MyButton className1="g-container" className2="small-b">Save</MyButton>
                    </div>
                </div>
            </div>
        </MyModal>
    );
}