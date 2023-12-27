import { Route,Routes } from 'react-router-dom';
import AllRest from './AllRest';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ViewRest from './ViewRest';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
<Route path='/' element ={<AllRest/>}/>
<Route path='/view/:id' element ={<ViewRest/>}/>

        </Routes>
      </section>
<footer>
  <Footer/>
</footer>
    </div>
  );
}

export default App;
