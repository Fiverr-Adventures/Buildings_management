export default function Page(props){
    return (
        <div className="page" style={{...props.style }}>
            {props.children}
        </div>
    )
}