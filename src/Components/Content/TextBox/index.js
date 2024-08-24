import style from '../TextBox/TextContainer.module.css'
function TextBox({text}){
    return(
        <div className={style.textContainer}>
            {text}
        </div>
    )

}
export default TextBox;