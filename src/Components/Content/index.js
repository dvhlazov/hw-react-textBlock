import {useState} from 'react';
import style from '../Content/Content.module.css';
import TextBox from './TextBox';
import TextInput from './TextInput/';
import Button from './Button';


function Content(){
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const typeChangeFunc = (newText) => {
        setText(newText);
    };

    const btnTextVisibility = () => {
        setIsVisible(stateBefore => {
            return !stateBefore;
        });
    };

    return(
        <main className={style.main} >
            <div className={style.textContainer}>
                {isVisible && <TextBox text = {text}/> }
                
            </div>
            <div className={style.inputText}>
                <TextInput typeChangeFunc={typeChangeFunc}/>
            </div>
            <div className={style.btn}>
                <Button btnTextVisibility={btnTextVisibility}/>
            </div>
        </main>
    )
}
export default Content;