import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ErrorPage from './Components/error404';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
