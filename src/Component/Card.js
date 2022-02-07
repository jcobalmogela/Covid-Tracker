import React from 'react';
import { Card } from 'react-bootstrap';

function Cards({title,value}) {
  return <Card className="col-12">
        <Card.Body>
            <Card.Title className='text-capitalize'>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{value}</Card.Subtitle>
        </Card.Body>
</Card> 

}

export default Cards;
