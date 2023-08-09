import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Products from './components/Products/Products';


function App() {
  return (
    <Fragment>
      <MainHeader/>
      <main>
        <Products/>
      </main>
    </Fragment>
  );
}

export default App;
