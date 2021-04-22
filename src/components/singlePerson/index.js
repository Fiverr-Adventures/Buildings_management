import {useState} from 'react';
import MyModal from "../../components/modal";
import PeopleInfo from '../../components/peopleInfo';
import Tag from '../../components/tags'
import Button2 from '../../components/b_button';

export default function SinglePeople (props) {
    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    const passAdd = ()=> {
        props.getAdd(add);
    }
    
    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} className="single-person">
            <h3>People</h3>
            <PeopleInfo object={props.object} />
            <div className="groups-info">
                <p className="large">Groups</p>
                <div className="tags-edit">
                    <div className="tags">
                        <Tag text = "Witte Resident" className="tag-info"/>
                        <Tag text = "College of L&S" className="tag-info"/>
                    </div>
                    <button className="large">edit</button>  
                </div>
            </div>
            <div  className="doors-info">
                <p className="large">Doors</p>
                <div className="tags-edit">
                    <Tag text = "Witte Hall: Room 345" className="tag-info"/>
                    <button className="large">edit</button>
                </div>
            </div>
            <div className="save-delete">
                <Button2 className="save">Save</Button2>
                <Button2  className="delete">Delete</Button2>
            </div>
        </MyModal>
    )
}