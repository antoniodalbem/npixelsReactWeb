import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import NavBar from './navBar.js';
import UltimasEdicoes from './UltimasEdicoes.js';
import Detalhes from './Detalhes.js';
import ListaNoticias from './ListaNoticias.js';

class App extends Component {
  
  state = {
    
    noticiaSelecionada : {},
    
  }
  
  state = {noticias: [
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 1 Media heading ',
      resumo: 'Csdfjksdjklfsldfjlksldfjlsakldfjklsajkldfjklsadjklfsdfavida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'sadfsadfsadfsadfsadfsad purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 2 Media heading ',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: '1111111111111111111111111111111111111111111111111111111111111111111111111111111',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 3 Media heading ',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 4 Media heading ',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 5 Media heading ',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'Crasantempus viverra turpis. Fusce condimecondimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    }
    ]}
  
 selecionarNoticia =  (noticia) => {
    this.setState(
      {
        noticiaSelecionada: noticia
      });
  }
  
  render() {
    return (
      <div>
        <Route exact path='/' render={() => 
          <div>
              <NavBar />
              <UltimasEdicoes />
              <ListaNoticias 
                  noticias={this.state.noticias}
                  selecionarNoticia={this.selecionarNoticia}/>
          </div>
        }/>
        <Route path='/detalhes' render={() =>
          <Detalhes 
          noticiaSelecionada = {this.state.noticiaSelecionada}/>
        }/>
      </div>
    );
  }
}

export default App;
