import Search from "../../assets/icons/svg/search.svg";

export default function SearchBar(props) {
    return (
        <div style={{...props.style}} className="search-form">
            <button type="button">
                <img src={Search} alt="search"/>
            </button>
            <input type="text"  placeholder="Search" />
        </div>
    )
}