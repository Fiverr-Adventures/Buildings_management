import React, {useState} from 'react';
import MyButton from '../../s_button'

const AddManyPeople= ()=> {

    const [fileUpload, setfileUpload] = useState("")
    var inputReference = React.createRef();
    const fileUploadAction = () => {
        inputReference.current.click();
    }
    const fileUploadInputChange = (e) => {
        setfileUpload(e.target.value);
    }
    
    return (
        <div className="add-many">
            <label>Drag & Drop CSV here</label>
            <label className="or">OR</label>
            <input type="file" hidden ref={inputReference} onChange={fileUploadInputChange} />
            <MyButton className2="upload" onClick={fileUploadAction}>
                Upload
            </MyButton>
            {fileUpload}
        </div>
    )
}
export default AddManyPeople;