import React from "react";
import { useState} from 'react';
import './SignUpForm.css';

export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        
          try {
            
               const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                     method: "POST",
                     headers: {"Content-Type": "application/json"},
                     body: JSON.stringify({username:username, password:password})
                     });
              const data = await response.json();
              console.log(data);
              setToken(data.token);
              console.log(token);             
            
              } catch (err) {
                     setError(err.message);
                     console.log(error);
                   }         
    }

    return (
     <div>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form className="signUpForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:{} 
              <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label htmlFor="password">Password:{} 
              <input value={password} onChange={(e) => setPassword(e.target.value )}/>
              </label>

            <button type="submit">Submit</button>
        </form>
     </div>   
    
      ) ;

}