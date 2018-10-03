import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar.js';

class Detalhes extends Component {
    
    render() {
        const {noticiaSelecionada} = this.props;
        return (
            <div>
                <NavBar />
              <h1>{noticiaSelecionada.titulo}</h1>
              <p>Supervisor: Tarley Lana</p>
              <p>{noticiaSelecionada.texto}</p>
              <p>Tags: Esporte, Cruzeiro, Libertadores</p>
              <Link to='/' className='btn btn-info'>Voltar</Link>
            </div>    
        );
    }
    
}

export default Detalhes;