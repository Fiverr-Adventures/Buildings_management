import Tag from '../../tags';
import SearchBar from "../../searchBar";

const Student = () => {
    return (
        <div style={{marginTop:"45px"}}> 
            <div className="search-door">
                <label>Groups</label>
                <p className="large">This will dictate what doors they have access to</p>
                <SearchBar />
            </div>  
            <div className="tags">
                <Tag text = "Witte Resident" className="tag-g"/>
                <Tag text = "College of L&S" className="tag-g"/>
            </div>
        </div>
     );
}
 
export default Student;