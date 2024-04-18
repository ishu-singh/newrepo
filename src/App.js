import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Converter from './components/Converter';
import QuestionLayout from './components/QuestionLayout';

function App() {
  return (
    <>
      
      <Router>
        <Routes>

          <Route path='/upload' exact element={<Converter/>}/>
          <Route path='/qlayout' exact element={<QuestionLayout/>}/>
      

        </Routes>
      </Router>
      <div>
      
      <style>
        {`
          body {
            background-color: rgb(228, 222, 222);
          }
        `}
      </style>
    </div>
    </>
  );
}

export default App;
