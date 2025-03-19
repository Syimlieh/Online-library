import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Category from "./components/Category"
import Booklist from "./components/Booklist"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Category />
        <Booklist />
      </BrowserRouter>
    </>
  )
}

export default App
