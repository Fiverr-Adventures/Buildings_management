const Button2 = (props) => {
    return (
        <button className={`b-button b-text-b ${props.className}`} type={props.type}>
            {props.children}
        </button>  
      );
}
 
export default Button2;