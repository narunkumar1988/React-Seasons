import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer:{
    txt : "Let's hit the beach!",
    iconName : 'sun'
  },
  winter:{
    txt : "Burr, its chilly",
    iconName : 'snowflake'
  }
}

const getSeasonDisplay = (lat, month) =>{
  if(month>2 && month<9){
    return lat>0 ? 'summer' : 'winter';
  }else{
    return lat>0 ? 'winter' : 'summer';
  }
}
const SeasonDisplay = (props)=>{
  const displayText = getSeasonDisplay(props.lat, new Date().getMonth());
  //const txt = displayText=== 'Winter' ? 'Burr, its chilly' : 'Lets hit the beach';
//  const icon = displayText === 'Winter'? 'snowflake': 'sun';
  const {txt, iconName} = seasonConfig[displayText];
  return (
    <div className={`season-display ${displayText}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1> {txt} </h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
