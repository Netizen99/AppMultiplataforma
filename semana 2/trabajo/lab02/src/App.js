import React, { Component } from 'react';

import Contador from './components/Contador/Contador';

class App extends Component{
  render(){
    return(<div>
    <p>Sumar</p>
  	<p>Pimer valor sera: 3</p>
  	<p>Segundo valor sera: 4</p>
  	<Contador valor={3} valor2={4}/>
    	  <hr />   
     
    </div>);
      
  }
}

export default App;
