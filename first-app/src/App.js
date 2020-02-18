import React from 'react';
import './App.css';
import {Card} from './Card';

function App() {
 return (
    <div className="App">
      <h1> Hola Mundoooo! </h1>
      <p> Chinga su madre xd </p>
      <Card name= "Danniela" career="Info" email="00087717@hotmail.com"/>
      <Card name= "Fatima" career="KK" email="00087717@hotmail.com"/>
      <Card name= "Jeniffer" career="Poooo" email="00087717@hotmail.com"/>

      <Card name= "Olmedo" career="Info" email="00087717@hotmail.com"/>
      <Card name= "César" career="Info" email="00087717@hotmail.com"/>
    </div>
  ); 

  /* 
  return(
    React.createElement('div', {className:"App"},
     React.createElement('h1', null, 'Hola Mundoooo'),
     React.createElement('p', null, 'Chinga su madre xd'),
     React.createElement('section', null, 
        React.createElement('h2', null, 'Danniela Renderos'),
        React.createElement('p', null, 'Estudio Ingeniería Informática'),
        React.createElement('p', null, 'Soy vergona xd')
        )
     )
  );
  */

}

export default App;
