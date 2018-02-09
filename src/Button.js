import React from 'react';
import {Button} from 'react-bootstrap';


const wellStyles = {width: 200, margin: '10px auto 10px'};

const buttonsInstance = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block> Vote  </Button>
  </div>
);
export default buttonsInstance;
