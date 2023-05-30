import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name,hp,sprites}) {
  const [isImgClicked , setIsImagClicked] = useState(true) 

  return (
    <Card>
        <div className="image">
        {isImgClicked && (<img src={sprites.front} alt="oh no!" onClick={()=>{setIsImagClicked(false)}} />)}
        {!isImgClicked && (<img src={sprites.back} alt="oh no!" onClick={()=>{setIsImagClicked(true)}} />)}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>  
    </Card>
  );
}

export default PokemonCard;
