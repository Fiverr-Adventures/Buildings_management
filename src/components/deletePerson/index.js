import {useState} from 'react';
import MyModal from "../../components/modal";
import Button2 from '../../components/b_button';
import PersonInfo from '../../components/personInfo';

const DeletePerson = (props) => {
    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    const passAdd = ()=> {
        props.getAdd(add);
    }
    return ( 
        <MyModal sendAdd = {getAdd} onClick={passAdd} className="single-person delete-person">
            <div className="modal-g">
                <div className="desc">
                    <PersonInfo object={props.object}/>
                    <div className="quest">
                        <h3>
                            Are you sure you want to delete {props.name} from all properties?
                        </h3>
                        <div className="buttons">
                            <Button2 className="deletePer">Yes, Delete</Button2>
                            <Button2 className="cancel" onClick={passAdd}>No, Cancel</Button2>  
                        </div>
                    </div>
                </div>
            </div>
        </MyModal>
     );
}
 
export default DeletePerson;