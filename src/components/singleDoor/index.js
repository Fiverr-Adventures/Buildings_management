import {useState} from 'react';
import MyModal from "../../components/modal";
import DoorInfo from '../../components/doorInfo';
import Button2 from '../../components/b_button';
import WendtFloor from '../../assets/icons/svg/Wendt-Floor.svg';

export default function SingleDoor (props) {
    const [add, setAdd] = useState(false);
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }
    
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} className="single-person">
            <h3>Door</h3>
            <DoorInfo object={props.object} />
            <div className="map">
                <img src={WendtFloor} alt="map" /> 
            </div>
            <div className="save-delete">
                <Button2 className="save">Save</Button2>
                <Button2  className="delete">Delete</Button2>
            </div>
        </MyModal>
    )
}