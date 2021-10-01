import React, { useState } from "react";
import Loading from "../Loading/Loading";

import App from "../App/App";


const AppContainer = () => {
    

  
  
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  // save clicks of each button to its own state
  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick= () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
      
    }
    setClicks(newClicks)
  }

  const handleBadClick= () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }
  const [loading,setLoading] =useState(true)
  setTimeout(() => {setLoading(false);},3000)
  if(loading){
    return(
      <Loading/>
    )
  }
// <button onClick={() => setGood(good + 1 )}>good</button>
//<button onClick={() => setNeutral(neutral + 1 )}>neutral</button>
//<button onClick={() => setBad(bad + 1 )}>bad</button>
    return(
        <App 
        clicks = {clicks}
        handleBadClick={handleBadClick}
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        />
    )
}

export default AppContainer