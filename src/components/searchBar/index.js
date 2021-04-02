import Search from "../../assets/icons/svg/search.svg";

export default function SearchBar() {
    return (
        <form>
            <button type="submit">
                <img src={Search} />
            </button>
            <input type="text"  placeholder="Search" />
        </form>
    //    {/* <button class="clear_icon" type="reset">
    //           <img  src={Clear}>
    //    </button> */}
    )
}