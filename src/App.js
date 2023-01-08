
import './App.scss';
import Carousel from './components/carousel/carousel';
import Cart from './components/cart/Cart';
import Header from './components/Header/Header';

const App = () =>{
  return(
    <main>
      <Header />
      <div className='home'>
          <Carousel />
          <Cart />
      </div>
    </main>
  )
}

export default App;
