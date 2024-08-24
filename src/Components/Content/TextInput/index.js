import style from './TextInput.module.css';

function TextInput({ typeChangeFunc }) {
    return (
        <div>
            <input 
                type="text"
                placeholder='Type here to add some text'
                className={style.textInput}
                onChange={(event) => typeChangeFunc(event.target.value)} 
            />
        </div>
    );
}

export default TextInput;
