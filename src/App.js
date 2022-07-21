import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ErrorPage from './Components/error404';
import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
