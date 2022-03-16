import './App.css';
import {Routes, Route} from 'react-router-dom'
import Admin from './pages/admin';
import OnlineShop from './pages/onlineShop';
import Selected from './pages/selected';
import Like from './pages/like';
import Korzinka from './pages/korzinka';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Kontak from './pages/kontak';


function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/korzinka' element={<Korzinka />}/>
          <Route path='/selected/:id' element={<Selected/>}/>
          <Route path='/kontak' element={<Kontak/>}/>
          <Route path='/like' element={<Like />}/>
          <Route path='/' element={<OnlineShop/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
