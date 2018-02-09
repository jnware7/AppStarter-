import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './Jumbotron.css'

const jumbotronInstance = (
  <Jumbotron className="jumbo-style">
    <h1>Hello, world!</h1>
    <p>Welcome to the AppTrade Website!</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);
export default jumbotronInstance
