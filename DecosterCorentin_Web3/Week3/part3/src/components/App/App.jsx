import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";

//import Stats from 'components/Stats/Stats'



const App = ({clicks,handleGoodClick,handleNeutralClick,handleBadClick}) => {
  
  return (
    <div>
      <h1>Give feedback</h1>
      
      <button onClick={handleGoodClick}>good</button>
      
      <button onClick={handleNeutralClick}>neutral</button>
      
      <button onClick={handleBadClick}>bad</button>
      
      <Statistics clicks={clicks}/>
      
    </div>
  )

}

export default App

