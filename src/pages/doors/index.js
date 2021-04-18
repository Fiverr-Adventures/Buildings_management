import {useState} from 'react';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { doors } from '../../data/doors';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import MyModal from "../../components/modal";
import Input from "../../components/input";
import MyButton from '../../components/s_button';
import InputRadio from '../../components/input_radio';
import WendtFloor from '../../assets/icons/svg/Wendt-Floor.svg';

export default function Doors() {

    const [open, setOpen] = useState(true);
    const handleOpen = (isClick)=> {
        setOpen(isClick);
    }
    const [selectedType, setSelectedType] = useState("Interior Private");
    const onValueChange= (event) => {
        setSelectedType(event.target.value)
    }
    const AddDoor= ()=> {
        return (
            <MyModal parentCallback = {handleOpen} >
                    <div className="modal-g">
                        <h3 className="h3">Add Door</h3>
                        <div className="form">
                            <div className="desc">
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
                                        <img src={WendtFloor} alt="map" /> 
                                    </div>
                                 </div>
                            </div>
                            <MyButton className2="small-b">Save</MyButton>
                        </div>
                    </div>
                </MyModal>
        );
    }

    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Doors" add="Add Door" addElem = {()=> setOpen(true)}/>
                    <CustomCard objects={doors} type="doors"/>
                    {open ? <AddDoor /> : null}
                </Page>  
             </SideBar>
        </Container>
    )
}