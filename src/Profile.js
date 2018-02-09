import React from 'react';
import TopAppStatus from './TopAppStatus';
import './Profile.css';
import buttonsInstance from './Button';
import Wireframe from './Wireframe'

const Profile = () => (
<div>
  <div className="d-flex justify-content-center">

    <div className="app-card3 d-flex flex-row">
      <div>
       <img className="app-image3" src="http://via.placeholder.com/800x450" alt='app-pic'></img>
     </div>
     <div>
        <div className="top-ten3">
        <h2>App Name</h2>
      </div>
      <div className="app-type"><h3><b>App Type</b></h3></div>
    <div className="d-flex justify-content-center">
      <p className="app-summary">Let’s see what Chef Dee got that they don’t want us to eat. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Mogul talk. Fan luv. The first of the month is coming, we have to get money, we have no choic</p>
     </div>
     <div className="d-flex flex-column">
     { buttonsInstance }

        <div className="author-row d-flex flex-row align-items-baseline">
         <img className="author-img" src="http://via.placeholder.com/50x 50" alt='author-img'></img>
          <div>by <strong>Jeffrey Ware</strong> </div>
        </div>
        <TopAppStatus/ >
    </div>
   </div>
  </div>
 </div>
 <Wireframe />
 </div>

)
export default Profile
