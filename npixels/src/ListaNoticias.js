import React, { Component } from 'react';
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class ListaNoticias extends Component {

    render() {
       const {noticias, selecionarNoticia} = this.props;
       
        return (
            <Container className="clearfix containerPrincipal">
            <Row>
                  <Col>
                  {noticias.map( n =>
                    <Media>
                       <Media left href="#">
                        <img src={n.icone} alt={n.titulo}>
                        </img>
                      </Media>
                      <Media body>
                        <Media heading>
                            <Link to='/detalhes'
                                onClick={() => selecionarNoticia(n)}>{n.titulo}
                            </Link>
                        </Media>
                        {n.resumo}
                      </Media>
                    </Media>
                    )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListaNoticias;
