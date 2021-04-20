import {useState} from 'react';
import MyModal from "../../components/modal";

export default function SinglePeople (props) {
    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    const passAdd = ()=> {
        props.getAdd(add);
    }
    
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd}>
            <h3>name: {props.param.name} .</h3>
        </MyModal>
    )
}