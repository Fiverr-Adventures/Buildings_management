import  {useState } from "react";
import MyModal from "../../components/modal";
import Input from "../../components/input";
import MyButton from '../../components/s_button';
import InputRadio from '../../components/input_radio';
import DraggableMarker from '../../components/draggableMarker'

export default function AddDoor (props) {

    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }
    const [selectedType, setSelectedType] = useState("Interior Private");
    const onValueChange= (event) => {
        setSelectedType(event.target.value)
    }
  
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} >
            <div className="modal-g">
                <h3 className="h3">Add Door</h3>
                <div className="desc">
                    <form className="form" >
                        <div className="input-details">   
                            <div className="inputs">
                                <div className="group-input">
                                    <label>Name</label>
                                    <Input className="input-g"/>  
                                </div>
                                <div className="building-d">
                                    <div className="group-input build">
                                        <label>Building</label>
                                        <Input className="input-g"/>  
                                    </div>  
                                    <div className="group-input floor">
                                        <label>Floor</label>
                                        <Input className="input-g"/>  
                                    </div>
                                </div>
                            </div>
                            <div className="type-p">
                                <label className="type">Type</label>
                                <InputRadio type="Building Entrance" selectedType={selectedType} change={onValueChange} className="in-radio"/>
                                <InputRadio type="Interior Public" selectedType={selectedType} change={onValueChange} className="in-radio" />
                                <InputRadio type="Interior Private" selectedType={selectedType} change={onValueChange} className="in-radio" />
                            </div> 
                        </div>
                        <div className="map-it">
                            <label>Map It</label>
                            <div className="map">
                                <DraggableMarker />
                            </div>
                        </div>
                        <MyButton className1="g-container" className2="small-b">Save</MyButton>
                    </form>
                </div>
            </div>
        </MyModal>
    );
}