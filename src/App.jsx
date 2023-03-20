import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, CategoryProduct, ProductSingle, Search, Cart } from './pages/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import store from './stores/index';
import { Provider } from 'react-redux';
function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductSingle />} />
            <Route path='/category/:category' element={<CategoryProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search/:searchItem' element={<Search />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
