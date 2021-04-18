import {useState} from 'react';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { buildings } from '../../data/buildings';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import MyModal from "../../components/modal";
import Input from "../../components/input";
import MyButton from '../../components/s_button';
import InputRadio from '../../components/input_radio';
import DropDown from '../../components/dropdown';

export default function Buildings() {
      
    const [open, setOpen] = useState(true);
    const handleOpen = (isClick)=> {
        setOpen(isClick);
    }
    const [selectedType, setSelectedType] = useState("Library");
    const [selectedOption, setSelectedOption] = useState("");

    const onValueChange= (event) => {
        setSelectedType(event.target.value)
    }
    const handleChange= (event) => {
        setSelectedOption(event.target.value);
    }
    const AddBuilding = () => {
        return (
            <MyModal parentCallback = {handleOpen} >
                <div className="modal-g">
                    <h3 >Add Buildings</h3>  
                    <div className="form">
                        <div className="desc">
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
                        </div>
                       <MyButton className1="g-container" className2="small-b">Save</MyButton>
                    </div>
                </div>
            </MyModal>
        );
    }
    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Buildings" add="Add Building" addElem = {()=> setOpen(true)}/>
                    <CustomCard objects={buildings} type="buildings"/>
                    {open ? <AddBuilding /> : null}
                </Page>  
             </SideBar>
        </Container>
    )
}