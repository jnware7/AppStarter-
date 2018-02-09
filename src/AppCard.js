import React from 'react';
import AppStatus from './AppCard/AppStatus';
import './app-card.css';

const AppCard = () => {
  return(
    <div className=" app-card d-flex flex-column">
      <div>
       <img className="app-image" src="http://via.placeholder.com/400x250" alt='app-pic'></img>
     </div>
     <div>
        <div className="top-ten">
        <h3>Top 10 Apps</h3>
      </div>
      <div className="app-type"><h3><b>App Type</b></h3></div>
    <div className="d-flex justify-content-center">
      <p className="app-summary">Let’s see what Chef Dee got that they don’t want us to eat. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Mogul talk. Fan luv. The first of the month is coming, we have to get money, we have no choic</p>
     </div>
        <div className="author-row d-flex flex-row align-items-baseline">
         <img className="author-img" src="http://via.placeholder.com/50x 50" alt='author-img'></img>
          <div>by <strong>Jeffrey Ware</strong> </div>
        </div>
        <AppStatus/ >
    </div>
   </div>
)
}
export default AppCard
