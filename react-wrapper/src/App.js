import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './Cart';
import './App.css';

export const AppContext = createContext({
  angularLoaded: false,
  setAngularLoaded: () => {}
});

function App() {
  const [angularLoaded, setAngularLoaded] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    const reducer = ({ detail: { type, payload } }) => {
      if (type === 'INCREASE_CART') {
        setCartItems(cartItems + 1);
      }
    };

    window.addEventListener('setReactState', reducer);

    return () => {
      window.removeEventListener('setReactState', reducer);
    };
  });

  return (
    <AppContext.Provider
      value={{
        angularLoaded,
        setAngularLoaded
      }}
    >
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
              </ul>
              <Cart items={cartItems} />
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
