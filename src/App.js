import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Subscribe } from "./components/Subscribe";
import {Footer} from './components/footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
