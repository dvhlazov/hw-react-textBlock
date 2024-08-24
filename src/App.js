import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import styles from '../src/App.css';


function App() {
  return (
  <div className={styles.body}>
    <div className='container'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
