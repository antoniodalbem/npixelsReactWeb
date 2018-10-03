import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


 function formatName (pessoa) {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
}


const pessoa = {
    nome : 'Thiago Alves',
    sobrenome: 'da Cruz',
}

 function getHello (url, pessoa) {
     if (pessoa) {
         return <h1> Ola Mundo!! {formatName (pessoa)} </h1>;
     }
     else {
         return <a href = {url}> Clique aqui para logar </a>;
     }
 }
const url = 'https://globo.com';
const name = "Thiago Alves";
//const element = <h1> Ola, {formatName (pessoa)}</h1>;
const element = getHello(url);

ReactDOM.render(
   // <App />, 
   
   element,
    document.getElementById('root'));
registerServiceWorker();
