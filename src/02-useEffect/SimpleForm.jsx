import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'user',
        email: 'user@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [ name ]: value
        });
    }

    return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username"
            value={ username }
            onChange= {onInputChange}
        />
        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="user@google.com" 
            name="email"
            value={ email }
            onChange= {onInputChange}
        />

        {(username === 'user') && <Message/>}
        
    </>
    )
}
