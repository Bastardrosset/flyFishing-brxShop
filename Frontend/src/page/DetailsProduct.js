import React from 'react'
import {Container, Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import products from '../product';

const DetailsProduct = () => {
    const match = useParams();
    const product = products.find((p) =>p._id === match.id);
  return (
    <Container>
        <Link to='/' className='btn btn-light my-3'><i class="fas fa-chevron-circle-left" style={{marginRight:'5px'}}></i>Retour
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} style={{maxWidth:'600px'}} alt={product.description} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3 style={{fontWeight:'bolder'}}>{product.name}</h3>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup variant='flush'>
                    <ListGroup.Item style={{fontSize:'22px'}}>
                        <p style={{color:'#76A044'}}>{product.price}</p>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                        <p>{product.utilite}</p>
                </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col style={{fontWeight:'bold'}}>Prix :</Col>
                                <Col style={{color:'#76A044'}}>{product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col style={{fontWeight:'bold'}}>Status :</Col>
                                <Col>{product.countInStock>0? `${product.countInStock} En stock`: 'Rupture de stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button disabled={product.countInStock === 0 || product.countInStock === ''} style={{width:'100%'}}>
                                Ajouter au panier
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default DetailsProduct
