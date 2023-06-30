import React from "react";
import { useState} from 'react';

export default function Authenitcate({token}) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {"Authorization": `Bearer ${token}`}
            });
            const result = await response.json();
            console.log(result);
            setSuccessMessage(result.message);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h2>Authenitcate!</h2>
            {error && <p>{error}</p>}
            <button type="submit" onClick={handleClick} >Authenticate Token</button>
            {successMessage && <p>{successMessage}</p>}

        </div>
      

    );
}