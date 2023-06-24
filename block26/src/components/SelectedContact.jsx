import React from "react";


export default function SelectedContact(selectedContactId){
    
    return(
        <div>
            <h2>Selected Contact</h2>
            <ul>
                <li>{contact.id}</li>
                <li>{contact.username}</li>
                <li>{contact.address}</li>
                <li>{contact.website}</li>
            </ul>
            
        </div>

    );
}

