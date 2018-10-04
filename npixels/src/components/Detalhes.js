import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar.js';
import { Container, Row, Col } from 'reactstrap';

class Detalhes extends Component {
    
    render() {
        const {noticiaSelecionada} = this.props;
        return (
            <div>
                <NavBar />
                <Container className="clearfix containerPrincipal">
                    <Row>
                        <Col>
                          <h1 className='text-center tituloNoticia'>{noticiaSelecionada.titulo}</h1>
                          <div className='conteudoNoticia'>
                              <p className='font-italic'>Supervisor: Tarley Lana</p>
                              <p>{noticiaSelecionada.texto}</p>
                              <small className='font-italic'>Tags: {noticiaSelecionada.tags}</small>
                              <Link to='/' className='btn btn-info float-right'>Voltar</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Detalhes;