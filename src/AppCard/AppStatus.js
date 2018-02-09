import React from 'react';
import Progressbar from "./Progressbar"
import './AppStatus.css'

const AppStatus = () =>
(
  <div>
    <div className="d-flex justify-content-center">
    {Progressbar}
    </div>
    <div className="app-stat">
       <h3><strong>6</strong> Votes</h3>
       <h3><strong>Approved</strong></h3>
       <h3><strong>1 week ago</strong></h3>
    </div>
  </div>
)


export default AppStatus;
