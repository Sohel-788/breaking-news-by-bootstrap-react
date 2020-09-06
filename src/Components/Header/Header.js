import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
            <Jumbotron>
                <h1>Breking news!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                 </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
    );
};

export default Header;