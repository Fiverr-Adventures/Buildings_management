export default function Header(props){
    return (
        <div className="pageHeader">
            <h3>{props.title}</h3>
            <button className="buttonText" onClick={props.addElem}>
                {props.add}
            </button>
        </div>
    )
}