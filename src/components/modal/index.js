
export default function MyModal(props) {

    const HandleToggle = ()=> {
        props.parentCallback(false);
    }
    
    return (
        <div>
            <div onClick={ HandleToggle }  className="backdrop"/>
            <div  className="content-wrapper_" >
                <div className="content_"> 
                    {props.children}
                </div>
            </div>
        </div>
    );
}
