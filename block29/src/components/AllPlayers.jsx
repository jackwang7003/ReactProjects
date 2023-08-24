import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function AllPlayers() {
    const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players';
    
    const [players, setPlayers] = useState([]);

    useEffect(() => {async function fetchPlayers() {  
        try {
           const response = await fetch(url);
           const json = await response.json();
           setPlayers(json.data.players);

                      
            console.log(players);
            
        } catch (error) {
           console.log(error);
        }
    }
    fetchPlayers();
    }, []);

  return (
    <div>
        <h3>All Players</h3>
        {
          players.map((player) => {
                return <Link to={`/players/${player.id}`} key={player.id}> {player.name} </Link>
                
          })
                         
         }
                   
     
             
        

    </div>
  

    
    
     
    );
}