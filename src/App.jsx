import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer, Header, Contact, Article, MainPage } from "./components/index.jsx";
import { Cart } from './pages/Cart';
export const App = () => {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" Component={MainPage}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/article/:id" Component={Article}/>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

