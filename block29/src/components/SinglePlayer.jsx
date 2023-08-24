import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function SinglePlayer() {
    const navigate = useNavigate();
    const playerId = useParams().playerId;
    const [player, setPlayer] = useState({});

    useEffect(() => { async function fetchPlayer() {
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players/${playerId}`);
            const json = await response.json();
            setPlayer(json.data.player);
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchPlayer();
    }, []);

 function deletePlayer(id) {
     fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players/${id}`, {
         method: 'DELETE'
     })
     .then(() => navigate(-1))
     .catch((error) => console.log(error));
    }




  return (
    <div>
        <h3>Single Player</h3>
        <li> ID: {player.id} </li>
         <li> Name: {player.name} </li>
         <li> Breed: {player.breed} </li>
         <li> TeamId: {player.teamId} </li>
        
       <button onClick={() => navigate(-1) }>Back</button>
       <button onClick={() => deletePlayer(player.id)}>Delete</button>

       
    </div>

    
    
     
    );
}