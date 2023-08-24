import { useState } from "react";

export default function NewPlayerForms() {
    const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players';
    
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [teamId, setTeamId] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

   

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlayer = {
            name: name,
            breed: breed,
            teamId: teamId
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlayer),
            });
            const json = await response.json();
            console.log(json);
            if (json.success) {
                setSuccess(true);
                setError(false);
            } else {
                setSuccess(false);
                setError(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>New Player</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" onChange={(event) => setBreed(event.target.value)} />
                <label htmlFor="teamId">TeamId:</label>
                <input type="text" id="teamId" onChange={(event) => setTeamId(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {success && <p>Successfully added player!</p>}
            {error && <p>Failed to add player!</p>}
        </div>
    )
}