import React,{Suspense,lazy} from 'react'
import './App.css';
import Firstpage from './component/Firstpage';
import Secondpage from './component/Secondpage';
import Secondlast from './component/Secondlast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './component/Redux/Store';
import Lastpage from './component/Lastpage';


function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
     
    <div >
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Firstpage}></Route>
            <Route  path="/second" component={Secondpage}></Route>
            <Route  path="/third" component={Secondlast}></Route>
            <Route  path="/last" component={Lastpage}></Route>
           
          </Switch>
        </div>
      </Router>
      
    </div>
    </PersistGate>
      </Provider>
  );
}

export default App;
