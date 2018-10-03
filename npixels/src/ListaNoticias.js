import React, { Component } from 'react';
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';

class ListaNoticias extends Component {

    render() {
       const {noticias, selecionarNoticia} = this.props;
       
        return (
          <div>
          {noticias.map( n =>
            <Media>
               <Media left href="#">
                <img src={n.icone} alt={n.titulo}>
                </img>
              </Media>
              <Media body>
                <Media heading>
                  <Link to='/detalhes'
                        onClick={() => selecionarNoticia(n)}>{n.titulo}</Link>
                </Media>
                {n.resumo}
              </Media>
            </Media>
            )}
            </div>
        );
    }

}

export default ListaNoticias;
