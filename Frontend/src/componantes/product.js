import React from 'react'
import { Card } from 'react-bootstrap'

const product = ({p}) => {
  return (
    <div>
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${p._id}`}>
                        <Card.Img src={p.image}/>
            </a>
            <Card.Body>
                <a href={`/product/${p._id}`} style={{textDecoration:"none"}}>
                    <Card.Title as="div" className="text-center text-black">
                        <strong>{p.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text>
                    <span className='my-1'>{p.description}</span>
                    <span>{p.size}</span>
                </Card.Text>
                <Card.Text as ='h5'>
                    <span style={{color:'#76A044'}}>{p.price}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default product
