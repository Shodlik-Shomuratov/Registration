import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Register from './components/form/RegisterC'
import Login from './components/form/LoginC'
import Home from './components/home/HomeC'
import NotFound from './components/NotFoundC'


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={< Home />}></Route>
        <Route exact path="/login" element={< Login />}></Route>
        <Route exact path="/register" element={< Register />}></Route>
        <Route exact element={< NotFound />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
)

export default App;
