import style from '../Button/Button.module.css';
function Button({btnTextVisibility}) {
    return (
        <button type = "button" className = {style.btn} onClick = {btnTextVisibility}>
            Show & Hide
        </button>
        
    );
}
export default Button;