import './App.css'
import { Footer, Header, Contact, Article, MainPage } from "./components/index.jsx";
import { Cart } from './pages/Cart';
export const App = () => {

  return (
    <>
      <Header />
      <Contact />
      <Cart />
      <Article />
      <MainPage />
      <Footer />
    </>
  )
}

