import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
  	<Provider store={store}> 
  	  <div>
  		<Header />
  		<BrowserRouter>
  		 <div>
  			<Route exact path='/' component={Home}></Route>
  			<Route path='/detail' component={Detail}></Route>
  		 </div>
  		</BrowserRouter>
  	  </div>
  	</Provider>
  );
}

export default App;
