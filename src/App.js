import './App.css';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Blog/>} />
        <Route path="/form/:id" element={<Form/>} />
        </Routes>
    </BrowserRouter>
    // <Blog />
  );
}

export default App;
