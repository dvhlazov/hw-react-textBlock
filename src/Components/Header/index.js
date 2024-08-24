import style from '../Header/Header.module.css';
import CurrentTime from './CurrentTime';
function Header() {

    return(
        <div className={style.header}>
            <div>Logo</div>
            <div >
                <CurrentTime></CurrentTime>
            </div>
        </div>
    )
}
export default Header;