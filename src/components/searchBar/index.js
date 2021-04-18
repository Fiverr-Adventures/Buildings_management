import Search from "../../assets/icons/svg/search.svg";

export default function SearchBar(props) {
    return (
        <form style={{...props.style}}>
            <button type="submit">
                <img src={Search} alt="search"/>
            </button>
            <input type="text"  placeholder="Search" />
        </form>
    )
}