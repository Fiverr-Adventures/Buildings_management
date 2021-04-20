
export default function MyModal(props) {

    const HandleToggle = ()=> {
        props.parentCallback(false);
    }
    
    return (
        <>
            <div onClick={ HandleToggle }  className="backdrop"/>
            <div  className= {` content-wrapper_ ${props.className}`} >
                    {props.children}
            </div>
        </>
    );
}
