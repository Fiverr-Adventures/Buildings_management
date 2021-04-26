import  React, {useState } from "react";
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
    
    const [fileUpload1, setfileUpload1] = useState("")
    var inputReference1 = React.createRef();
    const fileUploadAction1 = () => {
        inputReference1.current.click();
    }
    const fileUploadInputChange1 = (e) => {
        setfileUpload1(e.target.value);
    }
    const [fileUpload2, setfileUpload2] = useState("")
    var inputReference2 = React.createRef();
    const fileUploadAction2 = () => {
        inputReference2.current.click();
    }
    const fileUploadInputChange2 = (e) => {
        setfileUpload2(e.target.value);
    }
 
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} >
            <div className="modal-g">
                <h3 >Add Buildings</h3>  
                <div className="desc">
                    <form className="form">
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
                                {/* <MyButton className1= "b-container" className2="medium-b">Upload Layout</MyButton> */}
                                <input type="file" hidden ref={inputReference1} onChange={fileUploadInputChange1} />
                                <div>
                                    <MyButton className1= "b-container" className2="medium-b"
                                            onClick={fileUploadAction1}>
                                        Upload Layout
                                    </MyButton>
                                    {fileUpload1}
                                </div>
                            </div>
                            <div className="upload">
                                <label>Floor 1</label>
                                <input type="file" hidden ref={inputReference2} onChange={fileUploadInputChange2} />
                                <div>
                                    <MyButton className1= "b-container" className2="medium-b"
                                            onClick={fileUploadAction2}>
                                        Upload Layout
                                    </MyButton>
                                    {fileUpload2}
                                </div>
                            </div> 
                            <div className="add-buil">
                                <button className="b-text-s" type="button">+</button>
                            </div>
                        </div>
                        <MyButton className1="g-container" className2="small-b">Save</MyButton>
                    </form>
                </div>
            </div>
        </MyModal>
    );
}