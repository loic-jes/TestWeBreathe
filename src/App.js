import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Main, Footer } from './component/index'
import { BrowserRouter as Router } from "react-router-dom";



function App() {
 
    
  return (


    <div className="App">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
    </div>



  );
}

export default App;
