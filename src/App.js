import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
