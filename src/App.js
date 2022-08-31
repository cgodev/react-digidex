import './App.css';
import DigiHome from './Pages/DigiHome';
import {Route, Routes} from 'react-router-dom';
import AllDigimons from './Pages/AllDigimons';
import FloatingDigivice from './components/floatingDigivice';

function App() {

  return (
    <div className='App'>
      <FloatingDigivice/>
      <Routes>
        <Route path='/' element={<DigiHome/>}></Route>
        <Route path='/digimons' element={<AllDigimons />}></Route>
      </Routes>
    </div>
  )

 /*  return(
    <DigiHome />
  ) */

  /* return (
    <>
      <div className = 'digidex-area'>
        <DigimonList digimonList={[]} fullFilled={true}  />
      </div>
    </>
  ); */
}

export default App;