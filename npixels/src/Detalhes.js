import React, {Component} from 'react';
import {Link} from 'react-router-dom';
    
class Detalhes extends Component {
    render() {
        return (
            <div>
              <h1>Cruzeiro 1 x 0 Palmeiras</h1>
              <p>Supervisor: Tarley Lana</p>
              <p>
                Cruzeiro Esporte Clube é uma 
                associação polidesportiva brasileira, 
                com sede em Belo Horizonte, considerado 
                o maior clube de futebol no estado de 
                Minas Gerais.
              </p>
              <p>Tags: Esporte, Cruzeiro, Libertadores</p>
              <Link to='/' className='btn btn-info'>Voltar</Link>
            </div>    
        );
    }
    
}

export default Detalhes;