import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import products from '../product'
import Product from '../componantes/product'


const Home = () => {
  return (
    
        <Container>
            <h1>Nouvel arrivage</h1>
            <Row>
                {products.map((p)=>(
                    <Col key={p._id} sm={12} md={6} lg={4}>
                        
                        <Product p={p}/>
                    </Col>
                    ))} 
                
            </Row>
        </Container>
    
  )
}

export default Home
