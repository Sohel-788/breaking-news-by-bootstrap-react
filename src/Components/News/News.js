import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    console.log(props)
    const {title, description, urlToImage, author, url, publishedAt }=props.article;
    return (

        <Card style={{ width: '60%', margin:'0 auto' }}>
        <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {description} </Card.Text>
                <Button variant="primary">Know more</Button>
            </Card.Body>
        </Card>
    );
};

export default News;