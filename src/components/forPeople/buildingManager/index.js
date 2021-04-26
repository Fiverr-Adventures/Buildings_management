import Tag from '../../tags';
import SearchBar from "../../searchBar";

const BuildingManager = () => {
    return (
        <div style={{marginTop:"45px"}}> 
            <div className="search-door">
                <label>Groups</label>
                <p className="large">This will dictate what buildings they have
                <span style={{color: "#178fed"}}> Read/Write-Approve </span>access to</p>
                <SearchBar />
            </div>  
            <div className="tags">
                <Tag text = "Witte Residence Hall" className="tag-p"/>
            </div>
        </div>
     );
}
 
export default BuildingManager;