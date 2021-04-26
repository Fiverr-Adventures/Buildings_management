const Button2 = (props) => {
    return (
        <button className={`b-button b-text-b ${props.className}`} 
                onClick={props.onClick}>
            {props.children}
        </button>  
      );
}
 
export default Button2;