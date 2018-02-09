import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import './Progressbar.css'
const now = 60;

const progressInstance = (
  <ProgressBar now={now} label={`${now}%`} />
);

export default <ProgressBar now={now} label={`${now}%`} />
