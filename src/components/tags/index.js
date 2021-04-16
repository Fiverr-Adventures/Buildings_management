
export default function Tag(props) {
    return (
        <div className={`tag ${props.className}`}>
           <p className="b-text-r">{props.text}</p>
        </div>
    )
}
