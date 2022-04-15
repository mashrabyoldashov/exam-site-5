import './App.css';
import {Routes, Route} from 'react-router-dom'
import OnlineShop from './pages/onlineShop';
import Selected from './pages/selected';
import Like from './pages/like';
import Korzinka from './pages/korzinka';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Kontak from './pages/kontak';
import Finish from './pages/finish';
import Login from './pages/login';
import Public from './Routes/Public';
import Private from './Routes/Private';
import Admin from './pages/admin';
import Main from './components/main/main';


function App() {
  return (
    <div className='App'>
      <Header />
        <Main>
          <Routes>
              <Route path='/' element={<Public />}>
                  <Route path='/korzinka' element={<Korzinka />}/>
                  <Route path='/selected/:id' element={<Selected/>}/>
                  <Route path='/kontak' element={<Kontak/>}/>
                  <Route path='/finish' element={<Finish/>}/>
                  <Route path='/like' element={<Like />}/>
                  <Route path='/' element={<OnlineShop/>}/>
              </Route>
              <Route path='/' element={<Private/>}>
                  <Route path='/admin' element={<Admin/>}/>
              </Route>
              
          </Routes>
        </Main>
      <Footer/>
    </div>
  );
}

export default App;
