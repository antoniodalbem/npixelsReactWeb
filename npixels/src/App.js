import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import logo from './logo.svg';
import './css/App.css';
import NavBar from './components/navBar.js';
import UltimasEdicoes from './components/UltimasEdicoes.js';
import Detalhes from './components/Detalhes.js';
import ListaNoticias from './components/ListaNoticias.js';

class App extends Component {
  
  state = {
    
    noticiaSelecionada : {},
    
  }
  
  state = {noticias: [
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 1 Media heading ',
      data: 'há 1 hora',
      resumo: 'Csdfjksdjklfsldfjlksldfjlsakldfjklsajkldfjklsadjklfsdfavida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'sadfsadfsadfsadfsadfsad purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 2 Media heading ',
      data: 'há 14 horas',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: '1111111111111111111111111111111111111111111111111111111111111111111111111111111',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 3 Media heading ',
      data: 'há 19 horas',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 4 Media heading ',
      data: 'há 1 dia',
      resumo: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      texto: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      tags: 'Esporte, Tag1, Tag2, Tag3, noticiaxyz'
    },
    {
      icone: '/favicon.ico',
      titulo: 'Noticia 5 Media heading ',
      data: 'há 2 dias',
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
