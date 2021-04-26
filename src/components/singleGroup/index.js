import {useState} from 'react';
import MyModal from "../../components/modal";
import GroupInfo from '../../components/groupInfo';
import Tag from '../../components/tags'
import Button2 from '../../components/b_button';

export default function SingleGroup (props) {
    const [add, setAdd] = useState(false);
    

    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }

    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd}
            className="single-person" className2={props.show}>
            <div className="modal-g">
                <h3>Group</h3>
                <div className="desc">
                    <GroupInfo object={props.object} />
                    <div className="doors-edit">
                    <p className="large">Doors</p>
                    <button className="large">edit</button>
                    </div>
                    <div className="door-tags">
                        <div>
                            <Tag text="Witte Hall: Room 201" className="tag-info"/>
                            <Tag text="Witte Hall: Room 401" className="tag-info" />
                            <Tag text="Witte Hall: Room 601" className="tag-info" />
                            <Tag text="Witte Hall: Room 801" className="tag-info" />
                            <Tag text="Witte Hall: Room 1001" className="tag-info" />
                        </div>
                        <div>
                            <Tag text="Witte Hall: Room 301" className="tag-info" />
                            <Tag text="Witte Hall: Room 501" className="tag-info" />
                            <Tag text="Witte Hall: Room 701" className="tag-info" />
                            <Tag text="Witte Hall: Room 901" className="tag-info" />
                            <Tag text="Witte Hall: Room 1101" className="tag-info" />
                        </div>
                    </div>
                    <div className="save-delete">
                        <Button2 className="save">Save</Button2>
                        <Button2  className="delete">Delete</Button2>
                    </div>
                </div>
            </div>
        </MyModal>
    )
}