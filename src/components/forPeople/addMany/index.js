import MyButton from '../../s_button'

const AddManyPeople= ()=> {
    return (
        <div className="add-many">
            <label>Drag & Drop CSV here</label>
            <label className="or">OR</label>
            <MyButton  type="file" >Upload</MyButton>
        </div>
    )
}
export default AddManyPeople;