import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes className='App'>
        <Route index element={ <Home />}/>
        <Route path='/destination' element={ <Destination />}/>
        <Route path='/blog' element={ <Blog />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='*' element={ <NoMatch />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
